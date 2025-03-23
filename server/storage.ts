import { users, type User, type InsertUser, leads, type Lead, type InsertLead } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createLead(lead: InsertLead & { createdAt: string }): Promise<Lead>;
  getLeads(): Promise<Lead[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private leadsData: Map<number, Lead>;
  currentId: number;
  currentLeadId: number;

  constructor() {
    this.users = new Map();
    this.leadsData = new Map();
    this.currentId = 1;
    this.currentLeadId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createLead(insertLead: InsertLead & { createdAt: string }): Promise<Lead> {
    const id = this.currentLeadId++;
    // Ensure message is not undefined
    const message = insertLead.message ?? null;
    const companySize = insertLead.companySize ?? null;
    
    const lead: Lead = { 
      id,
      fullName: insertLead.fullName,
      companyName: insertLead.companyName, 
      jobTitle: insertLead.jobTitle,
      email: insertLead.email,
      phone: insertLead.phone,
      message: message,
      companySize: companySize,
      createdAt: insertLead.createdAt
    };
    
    this.leadsData.set(id, lead);
    return lead;
  }

  async getLeads(): Promise<Lead[]> {
    return Array.from(this.leadsData.values());
  }
}

export const storage = new MemStorage();
