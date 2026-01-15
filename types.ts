
export interface Movie {
  id: number;
  title: string;
  year: string;
  role: string;
  description: string;
  imageUrl: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
