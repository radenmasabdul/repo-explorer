import { useRepo } from "./hooks/use-repo";
import RepoCard from "./components/RepoCard";
import ApiState from "@/components/common/ApiState";
import Filter from "@/components/common/Filter";
import InfiniteScroll from "@/components/common/IntinityScroll";
import ResultCount from "@/components/common/ResultCount";

export default function Repository() {
  const {
    searchInput,
    sort,
    order,
    isLoading,
    isError,
    repositories,
    isFetchingNextPage,
    hasNextPage,
    handleSearch,
    handleSort,
    handleOrder,
    loadMore,
  } = useRepo();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <div className="mb-10 text-center">
        <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Explore <span className="text-primary">Repositories</span>
        </h1>

        <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground sm:text-lg">
          Discover repositories from GitHub and explore projects from developers
          around the world.
        </p>
      </div>

      <Filter
        searchInput={searchInput}
        sort={sort}
        order={order}
        onSearch={handleSearch}
        onSort={handleSort}
        onOrder={handleOrder}
      />

      <ResultCount
        count={repositories.length}
        isLoading={isLoading}
        isError={isError}
      />

      <ApiState
        isLoading={isLoading}
        isError={isError}
        isEmpty={repositories.length === 0}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {repositories.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      </ApiState>

      {!isLoading && !isError && repositories.length > 0 && (
        <InfiniteScroll
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          onLoadMore={loadMore}
          loadingText="Loading more repositories..."
          endText="You've reached the end."
        />
      )}
    </div>
  );
}
