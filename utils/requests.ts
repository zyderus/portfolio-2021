const apiDomain = process.env.NEXT_PUBLIC_GITHUB_API_DOMAIN || null;

export async function fetchRepos() {
  try {
    if (!apiDomain) {
      throw new Error('Unknown API domain name');
    }

    // TODO: Enable caching after finishing dev
    const res = await fetch(`${apiDomain}/repos?per_page=100`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (error) {
    throw error;
  }
}

// export async function fetchRepo(id: Number) {
//   try {
//     if (!apiDomain) {
//       return null;
//     }

//     const res = await fetch(`${apiDomain}/repos/${id}`);

//     if (!res.ok) {
//       throw new Error('Failed to fetch data');
//     }

//     return res.json();
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// }
