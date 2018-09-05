export class QuestionBase<T> {
    value: T;
    model: string;
    label: string;
    required: boolean;
    order: number;
    type: string;
  
    constructor(options: {
        value?: T,
        model?: string,
        label?: string,
        required?: boolean,
        order?: number,
        type?: string
      } = {}) {
      this.value = options.value;
      this.model = options.model || '';
      this.label = options.label || '';
      this.required = !!options.required;
      this.order = options.order === undefined ? 1 : options.order;
      this.type = options.type || '';
    }
  }