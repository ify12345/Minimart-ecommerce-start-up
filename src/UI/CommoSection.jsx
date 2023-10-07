import React from 'react'
import { Container } from 'reactstrap'
import "../styles/commonsection.css"



const CommoSection = ({title}) => {
  return (
  <section className="common_section">
    <Container>
        <h1>{title}</h1>
    </Container>
  </section>
  )
}

export default CommoSection
