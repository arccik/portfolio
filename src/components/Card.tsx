type Props = {
  title: string;
  description: string;
  image: string;
  tags: string[];
};

export default function Card({ title, description, image, tags }: Props) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {tags.map((tag) => (
            <div key={tag} className="badge badge-outline">
              {tag}
            </div>
          ))}
        </div>
      </div>
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
    </div>
  );
}
