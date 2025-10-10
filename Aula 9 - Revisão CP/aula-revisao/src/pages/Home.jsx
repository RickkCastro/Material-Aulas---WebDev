import { useEffect, useState } from "react";

export default function Home() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [maxPerPage, setMaxPerPage] = useState(5);
  const [totalCount, setTotalCount] = useState(0);

  const API = import.meta.env.VITE_GITHUB_API;

  function getRepos() {
    setLoading(true);

    fetch(`${API}?q=${search}&per_page=${maxPerPage}&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.items) {
          setRepos(data.items);
          setTotalCount(data.total_count);
        } else {
          setRepos([]);
          setTotalCount(0);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setRepos([]);
        setTotalCount(0);
        setPage(1);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function handleSearch() {
    setPage(1);
    getRepos();
  }

  useEffect(() => {
    getRepos();
  }, [maxPerPage, page]);

  const totalPages = Math.max(1, Math.ceil(totalCount / maxPerPage));

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-50">
            GitHub Repositories Explorer
          </h1>
          <p className="mt-2 text-gray-50">
            Search repositories and browse results
          </p>
        </header>

        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <svg
                className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 19a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for repositories or users..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-800"
              />
            </div>

            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-blue-700"
            >
              Search
            </button>
          </div>

          <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
            <div>
              Showing {repos.length} of {totalCount.toLocaleString()} results
            </div>
            <div>
              <label className="mr-2">Per page:</label>
              <select
                value={maxPerPage}
                onChange={(e) => setMaxPerPage(Number(e.target.value))}
                className="border border-gray-200 rounded px-2 py-1 bg-white"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
              </select>
            </div>
          </div>
        </div>

        <main>
          {loading ? (
            <div className="space-y-4">
              {[...Array(maxPerPage)].map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse bg-white p-4 rounded-lg shadow"
                >
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                  <div className="h-3 bg-gray-200 rounded w-1/3" />
                </div>
              ))}
            </div>
          ) : repos.length === 0 ? (
            <div className="bg-white p-8 rounded-lg shadow text-center text-gray-600">
              No results found
            </div>
          ) : (
            <ul className="space-y-4">
              {repos.map((repo) => (
                <li
                  key={repo.id}
                  className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-semibold text-blue-600 hover:underline"
                      >
                        {repo.full_name || repo.name}
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        {repo.description || "No description"}
                      </p>
                      <div className="mt-3 flex gap-3 text-sm text-gray-500">
                        <span>⭐ {repo.stargazers_count ?? 0}</span>
                        <span>🍴 {repo.forks_count ?? 0}</span>
                        {repo.language && (
                          <span className="px-2 py-0.5 bg-gray-100 rounded">
                            {repo.language}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <div>Owner</div>
                      <div className="mt-2">{repo.owner?.login}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm text-gray-300">
              Page {page} of {totalPages}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-3 py-1 rounded bg-white text-gray-800 disabled:bg-gray-600 disabled:text-gray-400"
              >
                Previous
              </button>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-3 py-1 rounded bg-white text-gray-800 disabled:bg-gray-600 disabled:text-gray-400"
              >
                Next
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
