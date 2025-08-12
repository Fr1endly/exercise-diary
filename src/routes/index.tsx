import { createFileRoute } from '@tanstack/react-router'
import '../App.css'

import Layout from '@/components/ui/layout'


export const Route = createFileRoute('/')({
  component: App,
})


interface HelloWorldProps {
  title: string
  attributesDict: Record<string, any>
}

const HelloWorld = ({ title, attributesDict }: HelloWorldProps) => {
  return (<div>
    <h1>{title}</h1>
    {attributesDict && Object.keys(attributesDict).map((key) => (
      <div key={key}>
        <strong>{key}:</strong> {attributesDict[key]}
      </div>
    ))}
  </div>
  )
}



function App() {


  return (
    <Layout
      slot1={
        <HelloWorld
          title={"Title"}
          attributesDict={{ "Days": 1, "Exercises":  2}}
        />
      }

    >
    </Layout>

  )
}
