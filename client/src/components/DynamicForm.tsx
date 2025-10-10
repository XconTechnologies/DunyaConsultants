import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

interface FormField {
  id: number;
  fieldLabel: string;
  fieldType: string;
  fieldName: string;
  placeholder: string | null;
  required: boolean;
  options: string[] | null;
}

interface CustomForm {
  id: number;
  title: string;
  description: string | null;
  slug: string;
  fields: FormField[];
}

interface DynamicFormProps {
  slug: string;
  onSuccess?: () => void;
}

export default function DynamicForm({ slug, onSuccess }: DynamicFormProps) {
  const { toast } = useToast();
  const [form, setForm] = useState<CustomForm | null>(null);
  const [loading, setLoading] = useState(true);
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm();

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const response = await fetch(`/api/forms/${slug}`);
        if (!response.ok) {
          throw new Error("Form not found");
        }
        const data = await response.json();
        setForm(data);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load form",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    fetchForm();
  }, [slug, toast]);

  const submitMutation = useMutation({
    mutationFn: (data: any) => 
      fetch(`/api/forms/${slug}/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data,
          source: window.location.pathname
        })
      }).then(async (res) => {
        if (!res.ok) {
          const error = await res.json();
          throw new Error(error.message || "Failed to submit form");
        }
        return res.json();
      }),
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Form submitted successfully"
      });
      if (onSuccess) onSuccess();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit form",
        variant: "destructive"
      });
    }
  });

  const onSubmit = (data: any) => {
    submitMutation.mutate(data);
  };

  const renderField = (field: FormField) => {
    const commonProps = {
      ...register(field.fieldName, { required: field.required }),
      placeholder: field.placeholder || undefined
    };

    switch (field.fieldType) {
      case "text":
      case "email":
      case "phone":
      case "number":
      case "date":
        return (
          <Input
            type={field.fieldType}
            {...commonProps}
            data-testid={`input-${field.fieldName}`}
          />
        );

      case "textarea":
        return (
          <Textarea
            {...commonProps}
            rows={4}
            data-testid={`textarea-${field.fieldName}`}
          />
        );

      case "select":
        return (
          <Select
            onValueChange={(value) => setValue(field.fieldName, value)}
            {...(field.required && { required: true })}
          >
            <SelectTrigger data-testid={`select-${field.fieldName}`}>
              <SelectValue placeholder={field.placeholder || "Select an option"} />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case "radio":
        return (
          <RadioGroup
            onValueChange={(value) => setValue(field.fieldName, value)}
            {...(field.required && { required: true })}
            data-testid={`radio-${field.fieldName}`}
          >
            {field.options?.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`${field.fieldName}-${option}`} />
                <Label htmlFor={`${field.fieldName}-${option}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        );

      case "checkbox":
        return (
          <div className="space-y-2">
            {field.options?.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <Checkbox
                  id={`${field.fieldName}-${option}`}
                  onCheckedChange={(checked) => {
                    const currentValues = watch(field.fieldName) || [];
                    if (checked) {
                      setValue(field.fieldName, [...currentValues, option]);
                    } else {
                      setValue(field.fieldName, currentValues.filter((v: string) => v !== option));
                    }
                  }}
                />
                <Label htmlFor={`${field.fieldName}-${option}`}>{option}</Label>
              </div>
            ))}
          </div>
        );

      default:
        return <Input {...commonProps} />;
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <Loader2 className="w-6 h-6 animate-spin" />
      </div>
    );
  }

  if (!form) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Form not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{form.title}</h2>
        {form.description && (
          <p className="text-gray-600 mt-2">{form.description}</p>
        )}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {form.fields.map((field) => (
          <div key={field.id}>
            <Label htmlFor={field.fieldName}>
              {field.fieldLabel}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </Label>
            <div className="mt-1">
              {renderField(field)}
            </div>
            {errors[field.fieldName] && (
              <p className="text-sm text-red-500 mt-1">
                This field is required
              </p>
            )}
          </div>
        ))}

        <Button 
          type="submit" 
          disabled={submitMutation.isPending}
          className="w-full"
          data-testid="button-submit-form"
        >
          {submitMutation.isPending ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </div>
  );
}
