import { useRouter } from 'next/router'

export default function Breakfast() {

    const router = useRouter()
    const { breakfastId } = router.query

    return <h1> Breakfast {breakfastId} Recipe</h1>
}