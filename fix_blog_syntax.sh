#!/bin/bash
for file in client/src/pages/blog/*.tsx; do
  # Fix double function declarations
  sed -i '0,/export default function.*{/{/export default function.*{/,+2{/return (/,+2{/return (/d;};}' "$file"
  
  # Fix closing div structures
  sed -i ':a;N;$!ba;s/\(<\/div>\)\([[:space:]]*\)}\([[:space:]]*<\/div>\)/\1\2}/g' "$file"
  
  # Add missing closing divs if needed
  opens=$(grep -o '<div' "$file" | wc -l)
  closes=$(grep -o '</div>' "$file" | wc -l)
  
  if [ "$opens" -gt "$closes" ]; then
    # Add closing div before final }
    sed -i '$s/}/    <\/div>\n  );\n}/' "$file"
  fi
done
