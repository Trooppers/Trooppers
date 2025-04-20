export interface Category {
  id: string;
  name: string;
  description?: string;
  isCustom: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Subcategory {
  id: string;
  categoryId: string;
  name: string;
  description?: string;
  isCustom: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Item {
  id: string;
  subcategoryId: string;
  name: string;
  description?: string;
  materialPrice: number;
  laborPrice: number;
  unit: string;
  isCustom: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Project {
  id: string;
  userId: string;
  name: string;
  description?: string;
  address?: string;
  status: 'draft' | 'active' | 'completed' | 'archived';
  clientName?: string;
  clientEmail?: string;
  clientPhone?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Budget {
  id: string;
  projectId: string;
  name: string;
  description?: string;
  discountPercentage: number;
  taxPercentage: number;
  total: number;
  status: 'draft' | 'sent' | 'approved' | 'rejected';
  createdAt: string;
  updatedAt: string;
}

export interface BudgetItem {
  id: string;
  budgetId: string;
  itemId: string;
  quantity: number;
  unitMaterialPrice: number;
  unitLaborPrice: number;
  isActive: boolean;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface BudgetFormData {
  name: string;
  description?: string;
  projectId: string;
  discountPercentage: number;
  taxPercentage: number;
  items: {
    itemId: string;
    quantity: number;
    unitMaterialPrice: number;
    unitLaborPrice: number;
    isActive: boolean;
    notes?: string;
  }[];
}
