import { 
  Order, 
  type InsertOrder
} from "@shared/schema";

// Interface for storage operations
export interface IStorage {
  createOrder(order: InsertOrder): Promise<Order>;
  getOrderById(id: number): Promise<Order | undefined>;
  getAllOrders(): Promise<Order[]>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private orders: Map<number, Order>;
  private currentOrderId: number;

  constructor() {
    this.orders = new Map();
    this.currentOrderId = 1;
  }

  async createOrder(orderData: InsertOrder): Promise<Order> {
    const id = this.currentOrderId++;
    const createdAt = new Date();
    
    const order: Order = {
      id,
      ...orderData,
      createdAt,
      status: "completed"
    };
    
    this.orders.set(id, order);
    
    return order;
  }

  async getOrderById(id: number): Promise<Order | undefined> {
    return this.orders.get(id);
  }

  async getAllOrders(): Promise<Order[]> {
    return Array.from(this.orders.values());
  }
}

// Export the storage instance
export const storage = new MemStorage();
