/**
 * loader
 */
import type { Route } from "./+types/transactions";

export async function loader({ request, params }: Route.LoaderArgs) {
   return [1, 2, 3];
}

/**
 * action
 */
//export default function () {
//    return <h1>Transações</h1>;
//}

export default function ({ loaderData }: { loaderData: number[] }) {
   return (
   <>
        <h1>Transações</h1>
        <ul>
            {loaderData?.map((item: number) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
   </>)
}