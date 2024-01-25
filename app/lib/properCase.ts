export default function toProperCase(value: string) {
    const proper = value.charAt(0).toUpperCase() + value.slice(1)

    return proper
}