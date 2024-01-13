import { stat } from 'node:fs/promises'

export async function isFileExists(
  filePath: string,
  { onError }: { onError?: () => void } = {},
) {
  try {
    await stat(filePath)
    return true
  } catch {
    await onError?.()
    return false
  }
}
