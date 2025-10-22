/**
 * FAQ Block for EditorJS
 * Allows creating collapsible FAQ items with question and answer fields
 */

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQBlockData {
  items: FAQItem[];
}

export default class FAQBlock {
  private api: any;
  private data: FAQBlockData;
  private wrapper: HTMLElement | null = null;
  private CSS = {
    wrapper: 'faq-block-wrapper',
    item: 'faq-block-item',
    addButton: 'faq-block-add-button',
    removeButton: 'faq-block-remove-button',
    questionInput: 'faq-block-question',
    answerInput: 'faq-block-answer',
  };

  static get toolbox() {
    return {
      title: 'FAQ',
      icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>',
    };
  }

  constructor({ data, api }: { data?: FAQBlockData; api: any }) {
    this.api = api;
    this.data = {
      items: data?.items || [{ question: '', answer: '' }],
    };
  }

  render(): HTMLElement {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add(this.CSS.wrapper);

    this.renderFAQItems();
    this.renderAddButton();

    return this.wrapper;
  }

  renderFAQItems(): void {
    if (!this.wrapper) return;

    // Clear existing items
    this.wrapper.innerHTML = '';

    this.data.items.forEach((item, index) => {
      const itemWrapper = document.createElement('div');
      itemWrapper.classList.add(this.CSS.item);
      itemWrapper.style.cssText = 'margin-bottom: 20px; padding: 15px; border: 1px solid #e5e7eb; border-radius: 8px; background: #f9fafb;';

      // Question input
      const questionLabel = document.createElement('label');
      questionLabel.textContent = `Question ${index + 1}`;
      questionLabel.style.cssText = 'display: block; font-weight: 600; margin-bottom: 5px; color: #1D50C9;';

      const questionInput = document.createElement('input');
      questionInput.classList.add(this.CSS.questionInput);
      questionInput.type = 'text';
      questionInput.placeholder = 'Enter question...';
      questionInput.value = item.question;
      questionInput.style.cssText = 'width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px; margin-bottom: 10px; font-size: 14px;';
      questionInput.addEventListener('input', (e) => {
        this.data.items[index].question = (e.target as HTMLInputElement).value;
      });

      // Answer input
      const answerLabel = document.createElement('label');
      answerLabel.textContent = 'Answer';
      answerLabel.style.cssText = 'display: block; font-weight: 600; margin-bottom: 5px; color: #1D50C9;';

      const answerInput = document.createElement('textarea');
      answerInput.classList.add(this.CSS.answerInput);
      answerInput.placeholder = 'Enter answer...';
      answerInput.value = item.answer;
      answerInput.rows = 3;
      answerInput.style.cssText = 'width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 6px; margin-bottom: 10px; font-size: 14px; resize: vertical;';
      answerInput.addEventListener('input', (e) => {
        this.data.items[index].answer = (e.target as HTMLTextAreaElement).value;
      });

      // Remove button
      const removeButton = document.createElement('button');
      removeButton.classList.add(this.CSS.removeButton);
      removeButton.textContent = '× Remove';
      removeButton.style.cssText = 'padding: 6px 12px; background: #ef4444; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 13px;';
      removeButton.addEventListener('click', () => {
        this.data.items.splice(index, 1);
        this.renderFAQItems();
        this.renderAddButton();
      });

      itemWrapper.appendChild(questionLabel);
      itemWrapper.appendChild(questionInput);
      itemWrapper.appendChild(answerLabel);
      itemWrapper.appendChild(answerInput);
      
      if (this.data.items.length > 1) {
        itemWrapper.appendChild(removeButton);
      }

      this.wrapper?.appendChild(itemWrapper);
    });
  }

  renderAddButton(): void {
    if (!this.wrapper) return;

    // Remove existing add button if any
    const existingButton = this.wrapper.querySelector(`.${this.CSS.addButton}`);
    if (existingButton) {
      existingButton.remove();
    }

    const addButton = document.createElement('button');
    addButton.classList.add(this.CSS.addButton);
    addButton.textContent = '+ Add FAQ Item';
    addButton.style.cssText = 'padding: 10px 20px; background: #1D50C9; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 500; margin-top: 10px;';
    addButton.addEventListener('click', () => {
      this.data.items.push({ question: '', answer: '' });
      this.renderFAQItems();
      this.renderAddButton();
    });

    this.wrapper?.appendChild(addButton);
  }

  save(): FAQBlockData {
    return this.data;
  }

  static get isReadOnlySupported(): boolean {
    return true;
  }

  static get pasteConfig() {
    return {
      tags: ['DIV'],
    };
  }
}
