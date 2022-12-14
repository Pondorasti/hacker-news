import { PostSkeleton } from "./components/Post"

export default function Loading() {
  return (
    <>
      {Array.from({ length: 30 }).map((_, i) => (
        <PostSkeleton key={i} />
      ))}
    </>
  )
}
