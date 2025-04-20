export interface Plan {
  id: string;
  projectId: string;
  name: string;
  description?: string;
  fileUrl?: string;
  fileType: 'pdf' | 'cad' | 'generated';
  width?: number;
  length?: number;
  floors: number;
  createdAt: string;
  updatedAt: string;
}

export interface Annotation {
  id: string;
  planId: string;
  annotationType: 'text' | 'measurement' | 'area' | 'note';
  content?: string;
  xPosition: number;
  yPosition: number;
  width: number;
  height: number;
  color?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Room {
  name: string;
  x: number;
  y: number;
  width: number;
  length: number;
  type: 'bedroom' | 'bathroom' | 'kitchen' | 'living' | 'dining' | 'other';
}

export interface GeneratePlanData {
  projectId: string;
  name: string;
  description?: string;
  width: number;
  length: number;
  floors: number;
  rooms: Room[];
}
