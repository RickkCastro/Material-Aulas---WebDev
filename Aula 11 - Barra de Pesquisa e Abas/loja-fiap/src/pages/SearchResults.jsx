import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import SectionContainer from "../components/SectionContainer";

const SearchResults = () => {
  const { termoBusca } = useParams();
  const API_URL = import.meta.env.VITE_API_URL;

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`${API_URL}`);
      const data = await res.json();
      setItems(data);
    };

    fetchProduct();
  }, [termoBusca]);

  const itemsFiltrados = items.filter((item) =>
    item.title.toLowerCase().includes(termoBusca.toLowerCase())
  );

  if (itemsFiltrados.length < 1) {
    return (
      <h1 className="text-2xl font-bold p-5">Nenhum produto encontrado :(</h1>
    );
  }

  return (
    <div className="">
      <SectionContainer title={`Resultados da Pesquisa para: ${termoBusca}`}>
        {itemsFiltrados.map((item) => (
          <ProductCard {...item} />
        ))}
      </SectionContainer>
    </div>
  );
};

export default SearchResults;
