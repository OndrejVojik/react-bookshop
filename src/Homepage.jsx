import BookList from './BookList'
export default function Homepage(){
    return (
      <div className="homepage">
        <h2>Welcome to Flourish and Blotts!</h2>

        <BookList />
      </div>
    );
}