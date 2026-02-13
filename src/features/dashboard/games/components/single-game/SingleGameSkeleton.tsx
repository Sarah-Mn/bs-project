import { Skeleton, Box, Stack, Divider } from "@mui/material";

export default function GameLoading() {
  return (
    <div className="min-h-screen pb-16">
      {/* HERO SECTION */}
      <div className="relative h-100 w-full">
        <Skeleton
          variant="rectangular"
          animation="wave"
          width="100%"
          height="100%"
        />

        <div className="absolute inset-0 flex items-end p-6">
          <Stack spacing={2} width="100%">
            <Skeleton variant="text" width="40%" height={50} />
            <Stack direction="row" spacing={3}>
              <Skeleton variant="text" width={120} />
              <Skeleton variant="text" width={100} />
              <Skeleton variant="rounded" width={80} height={28} />
            </Stack>
          </Stack>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 mt-10 space-y-10">
        {/* DESCRIPTION */}
        <section>
          <Skeleton variant="text" width={200} height={40} />
          <Stack spacing={1} mt={2}>
            <Skeleton variant="text" />
            <Skeleton variant="text" width="90%" />
            <Skeleton variant="text" width="75%" />
            <Skeleton variant="text" width="60%" />
          </Stack>
        </section>

        <Divider />

        {/* INFO GRID */}
        <section className="grid md:grid-cols-2 gap-10">
          {/* LEFT */}
          <div className="space-y-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <Box key={i}>
                <Skeleton variant="text" width={150} height={30} />
                <div className="flex flex-wrap gap-2 mt-2">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <Skeleton
                      key={j}
                      variant="rounded"
                      width={90}
                      height={32}
                    />
                  ))}
                </div>
              </Box>
            ))}
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            <Skeleton variant="text" width={220} height={30} />

            <div>
              <Skeleton variant="text" width={100} />
              <Skeleton
                variant="rectangular"
                height={120}
                sx={{ borderRadius: 2, mt: 1 }}
              />
            </div>

            <div>
              <Skeleton variant="text" width={140} />
              <Skeleton
                variant="rectangular"
                height={120}
                sx={{ borderRadius: 2, mt: 1 }}
              />
            </div>
          </div>
        </section>

        <Divider />

        {/* SCREENSHOTS */}
        <section>
          <Skeleton variant="text" width={250} height={40} />

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton
                key={i}
                variant="rectangular"
                height={200}
                sx={{ borderRadius: 3 }}
              />
            ))}
          </div>
        </section>

        <Divider />

        {/* TRAILERS */}
        <section>
          <Skeleton variant="text" width={200} height={40} />

          <div className="grid md:grid-cols-2 gap-6 mt-4">
            {Array.from({ length: 2 }).map((_, i) => (
              <Skeleton
                key={i}
                variant="rectangular"
                height={250}
                sx={{ borderRadius: 3 }}
              />
            ))}
          </div>
        </section>

        <Divider />

        {/* RELATED GAMES */}
        <section>
          <Skeleton variant="text" width={260} height={40} />

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i}>
                <Skeleton
                  variant="rectangular"
                  height={180}
                  sx={{ borderRadius: 3 }}
                />
                <Skeleton variant="text" width="80%" sx={{ mt: 1 }} />
              </div>
            ))}
          </div>
        </section>

        {/* BUTTON */}
        <div className="pt-6">
          <Skeleton variant="rounded" width={200} height={40} />
        </div>
      </div>
    </div>
  );
}
