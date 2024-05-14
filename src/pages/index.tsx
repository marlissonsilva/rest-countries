import Layout from "@/components/Layout";
import ContainerInputs from "@/components/ContainerInputs";
import Content from "@/components/Content";
import { useEffect, useState } from "react";
import Card from "@/components/Card";
import Load from "@/components/Load";
import { baseUrl } from "@/data/url";

export default function Home() {
  const [url, setUrl] = useState('all')
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)

  function handleOptionChange(selectedValue: any) {
    if (selectedValue === '') {
      setUrl('all')
      return
    }
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
      <Content className="flex flex-col sm:justify-center  flex-wrap gap-6 px-4
        sm:flex-row sm:">
        {loading ? <Load /> :
          countries.length > 0 ? countries.map((country, index) => (
            <Card data={country} key={index} />
          )) : <p className="pt-20 ">Nenhum país encontrado</p>}
      </Content>
    </Layout>
  );
}
