import React from "react"
import { ButtonStyled } from "../../styles"

export default ({ props }) => {
  const { handleNext, handleSubmit, currentIndex, totalQuestions } = props
  let Button
  const lastQuestion = currentIndex === totalQuestions - 1

  if (!lastQuestion) {
    Button = () => {
      return (
        <ButtonStyled variant="text" onClick={handleNext}>
          Next -{">"}
        </ButtonStyled>
      )
    }
  }
  if (lastQuestion) {
    Button = () => (
      <ButtonStyled onClick={handleSubmit}>See My Results!</ButtonStyled>
    )
  }
  return <Button />
}
