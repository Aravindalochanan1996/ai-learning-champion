const modules = import.meta.glob('./roles/*.json', { eager: true })

export const roles = Object.values(modules)
  .map((m) => m.default ?? m)
  .sort((a, b) => a.title.localeCompare(b.title))

export function getRole(roleId) {
  return roles.find((r) => r.id === roleId)
}

export function getSection(roleId, sectionId) {
  const role = getRole(roleId)
  if (!role) return null
  return role.sections.find((s) => s.id === sectionId) ?? null
}
