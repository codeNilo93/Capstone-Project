export function loadFromLocal(key) {
  const jsonString = localStorage.getItem(key)
  try {
    const data = JSON.parse(jsonString)
    return data
  } catch (error) {
    console.error(error)
  }
}

export function saveToLocal(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}
