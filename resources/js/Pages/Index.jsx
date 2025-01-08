import { router } from '@inertiajs/react'
export default function Index({ posts }) {
    function deletePost(id) {
        router.delete(`/post/${id}`);
    }

    return (
        <>
            <h1>My Super Blog</h1>
            <hr/>
            {posts && posts.map((item) => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                    <a href={`/post/${item.id}/edit`}>Edit</a> {/* Edit link */}
                    <form method="POST" action={`/post/${item.id}`} style={{ display: 'inline' }}>
                        <input type="hidden" name="_method" value="DELETE" />
                        <button type="button" onClick={() => deletePost(item.id)}>Delete</button>
                    </form>
                </div>
            ))}
        </>
    );
}
