import Layout from "@/components/Layout";
import ContainerInputs from "@/components/ContainerInputs";
import Content from "@/components/Content";
import { useEffect, useState } from "react";
import Card from "@/components/Card";
import Load from "@/components/Load";
import { baseUrl } from "@/data/url";

export default function Home() {
  const [url, setUrl] = useState(`region/africa`)
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)

  function handleOptionChange(selectedValue: any) {
    setUrl(`region/${selectedValue}`);
  }

  function handleInputChange(inputValue: any) {
    if (inputValue === '') {
      setUrl('all')
      return
    }
    setUrl(`name/${inputValue}`);
  }

  useEffect(() => {
    fetch(`${baseUrl}${url}`)
      .then(res => res.json())
      .then((data) => {
        setCountries(data)
        setLoading(false)
      })
      .catch(error => console.log(error))
  }, [url])
  return (
    <Layout>
      <ContainerInputs onOptionChange={handleOptionChange} onInputChange={handleInputChange} />
      <Content className="grid sm:grid-cols-2 lg:grid-cols-4 gap-9 pb-10">
        {loading ? <Load /> :
          countries.length > 0 ? countries.map((country, index) => (
            <Card data={country} key={index} />
          )) : <p className="pt-20 text-center">Nenhum país encontrado</p>}
      </Content>
    </Layout>
  );
}
