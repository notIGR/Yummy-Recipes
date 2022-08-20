import { useRouter } from 'next/router'

export default function Lunch() {

    const router = useRouter()
    const { lunchId } = router.query

    return (
        <>
            <h1> Lunch {lunchId} Recipe</h1>
            <h2> yo hambre.... </h2>
        </>
    )
}