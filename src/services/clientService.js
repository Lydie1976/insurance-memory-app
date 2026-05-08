import { mockClients } from '../data/mockClients'

export async function getClients() {
  return mockClients
}

export async function getClientById(clientId) {
  return mockClients.find((client) => client.id === clientId) ?? null
}
