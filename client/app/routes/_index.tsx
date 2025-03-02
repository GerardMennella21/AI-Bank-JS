import { redirect } from "@remix-run/react";
import { getAuth } from "@clerk/remix/ssr.server";
import { SignedIn, SignedOut, SignInButton } from "@clerk/remix";
import { LoaderFunctionArgs } from "@remix-run/node";

// Loader to check if the user is signed in
export async function loader(args: LoaderFunctionArgs) {
  const authInfo = await getAuth(args);
  const { userId } = authInfo;

  // Redirect to /accounts if the user is signed in
  if (userId) {
    return redirect("/accounts");
  }

  return null;
}

function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Our Banking App</h1>
      <p>Manage your finances with ease.</p>

      {/* Show sign-in button if the user is signed out */}
      <SignedOut>
        <SignInButton mode="modal">
          <button
            style={{
              padding: "10px 20px",
              background: "#0070f3",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Sign In
          </button>
        </SignInButton>
      </SignedOut>

      {/* Show a message if the user is signed in */}
      <SignedIn>
        <p>You are signed in. Redirecting to your accounts...</p>
      </SignedIn>
    </div>
  );
}

export default Index;
