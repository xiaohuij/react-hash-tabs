const isClient = () => typeof window !== 'undefined'
const getHash = () => window.location.hash.slice(1)
const setHash = (hash) => {
  if (history.pushState) {
    history.pushState(null, null, `#${hash}`)
  } else {
    window.location.hash = hash
  }
}
export { isClient, getHash, setHash }
