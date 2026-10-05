export default function Breadcrumb({ links }: { links: string[] }) {
  return (
    <ul className="text-gray-600 flex list-none text-lg  items-center ">
      {links.map((link, index) => (
        <li
          key={index}
          className="last:font-semibold not-last:after:text-sm not-last:after:content-['\f105'] not-last:after:font-['fontawesome'] not-last:after:mx-2"
        >
          {link}
        </li>
      ))}
    </ul>
  );
}
