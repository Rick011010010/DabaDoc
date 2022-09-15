import { getProviders, signIn, useSession, signOut, getSession } from "next-auth/react";


export default function SignIn({ providers }) {
    return (
        <>
            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button onClick={() => signIn(provider.id)} className=" p-5 bg-green-200">
                        Sign in with {provider.name}
                    </button>
                </div>
            ))}
        </>
    )
}

export async function getServerSideProps(context) {

    const { req } = context;
    const session = await getSession({ req })
    if (session) {

        return {
            redirect: {
                destination: '/home'
            }

        }



    } 



    const providers = await getProviders()
    return {
        props: { providers },
    }
}