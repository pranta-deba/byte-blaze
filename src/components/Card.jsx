import { Link } from "react-router-dom";
import placeholderImage from "../assets/404.jpg";
import { MdDelete } from "react-icons/md";

const Card = ({ blog , dateable, handleDelete}) => {
  const { title, cover_image, description, published_at, id } = blog;
 
  return (
   <div className="relative max-w-sm mx-auto group transition border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 hover:no-underline focus:no-underline dark:bg-gray-900">
    <Link
      to={`/blog/${id}`}
      rel="noopener noreferrer"
      className=""
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 dark:bg-gray-500"
        src={cover_image || placeholderImage}
        alt={title}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        <span className="text-xs dark:text-gray-400">{new Date(published_at).toLocaleDateString()}</span>
        <p>{description}</p>
      </div>
    </Link>
    {
      dateable && (
        <div onClick={() => handleDelete(id)} className="absolute -top-4 -right-4 bg-red-400 p-3 ml-5 rounded-full cursor-pointer hover:scale-105 overflow-hidden text-white">
          <MdDelete />
        </div>
      )
    }
   </div>
  );
};

export default Card;
