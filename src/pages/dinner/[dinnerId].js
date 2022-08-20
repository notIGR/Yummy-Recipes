import { useRouter } from 'next/router'

export default function Dinner() {

    const router = useRouter()
    const { dinnerId } = router.query

    return <h1> Dinner {dinnerId} Recipe</h1>
}