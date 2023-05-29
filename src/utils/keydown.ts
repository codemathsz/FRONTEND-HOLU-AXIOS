import React from 'react'

export function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
  const key = event.key
  if (key === ',') {
    event.preventDefault()
  }
}
