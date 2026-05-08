import { mockVisits } from '../data/mockVisits'

export async function getVisits() {
  return mockVisits
}

export async function getVisitsByClientId(clientId) {
  return mockVisits.filter((visit) => visit.clientId === clientId)
}
