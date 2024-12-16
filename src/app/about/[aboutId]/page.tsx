interface AboutIdParams {
  params: {
    aboutId: number;
  };
}
export default function AboutId({ params }: AboutIdParams) {
  return <h1>Sobre {params.aboutId}</h1>;
}
