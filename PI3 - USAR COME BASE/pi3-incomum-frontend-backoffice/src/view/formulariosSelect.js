import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import authHeader from "./auth-header";
import { useNavigate } from "react-router-dom";

import Navbar from "../component/Navbar";

export default function formularioEdit() {
  const [campDataPreenchimento, setcampDataPreenchimento] = useState("");

  const [campNomeMarca, setcampNomeMarca] = useState("");
  const [campEmail, setcampEmail] = useState("");

  const [campMDRedesSociais, setcampMDRedesSociais] = useState("");
  const [campMDPublicacoesPorSemana, setcampMDPublicacoesPorSemana] = useState(0);
  const [campMDStoriesPorSemana, setcampMDStoriesPorSemana] = useState(0);
  const [campMDRellsPorSemana, setcampMDRellsPorSemana] = useState(0);
  const[campMDDesign, setcampMDDesign] = useState(false);
  const[campMDCapaPorMes, setcampMDCapaPorMes] = useState(0);
  const[campMDCopywriting, setcampMDCopywriting] = useState(false);
  const[campMDPlanificaçãoEditorial, setcampMDPlanificaçãoEditorial] = useState(false);
  const[campMDTempoConsultoriaDigitalPorSemana, setcampMDTempoConsultoriaDigitalPorSemana] = useState(0);
  const[campMDGestaoCampanhas, setcampMDGestaoCampanhas] = useState(false);
  const[campMDRelatorioMensal, setcampMDRelatorioMensal] = useState(false);
  const[campMDPublicidadePaga, setcampMDPublicidadePaga] = useState(false);  
  const[campMDEmailMarketing, setcampMDEmailMarketing] = useState(false);
  const[campMDOtimizaçãoSEO, setcampMDOtimizaçãoSEO] = useState(false);

  const[campDGAnaliseConcorrencia, setcampDGAnaliseConcorrencia] = useState(false);
  const[campDGLogotipo, setcampDGLogotipo] = useState(false);
  const[campDGPaletaCores, setcampDGPaletaCores] = useState(false);  
  const[campDGSlogan, setcampDGSlogan] = useState(false);
  const[campDGManualNormasGraficas, setcampDGManualNormasGraficas] = useState(false);
  const[campDGEstacionario, setcampDGEstacionario] = useState(false);  
  const[campDGBrandingRebranding, setcampDGBrandingRebranding] = useState(false);
  const[campDGEstrategiaMarca, setcampDGEstrategiaMarca] = useState(false);
  const[campDGRegistoMarcaDesignEditorial, setcampDGRegistoMarcaDesignEditorial] = useState(false);  

  const[campWLOSIWebsiteOnePage, setcampWLOSIWebsiteOnePage] = useState("");
  const[campWLOSILimitePaginas, setcampWLOSILimitePaginas] = useState(0);
  const[campWLOSIPortfolio, setcampWLOSIPortfolio] = useState(false);
  const[campWLOSIConteudosTextuais, setcampWLOSIConteudosTextuais] = useState(false);
  const[campWLOSIAlojamento, setcampWLOSIAlojamento] = useState(false);
  const[campWLOSIDominio, setcampWLOSIDominio] = useState(false);

  const[campWLOLOLimitePaginas, setcampWLOLOLimitePaginas] = useState(false);
  const[campWLOLOPaginasPretende, setcampWLOLOPaginasPretende] = useState(0);
  const[campWLOLOIntegracao, setcampWLOLOIntegracao] = useState(false);
  const[campWLOLOConteudosTextuais, setcampWLOLOConteudosTextuais] = useState(false);
  const[campWLOLOAlojamento, setcampWLOLOAlojamento] = useState(false);
  const[campWLOLODominio, setcampWLOLODominio] = useState(false);  

  const[campCCComunicacaoEConsultoria, setcampCCComunicacaoEConsultoria] = useState(false);
  const[campCCConsultoriaDeMarketingComunicacao, setcampCCConsultoriaDeMarketingComunicacao] = useState(false);
  const[campCCOrganizacaoDeEventos, setcampCCOrganizacaoDeEventos] = useState(false);
  const[campCCAssessoriaECriaçãoDeConteudo, setcampCCAssessoriaECriaçãoDeConteudo] = useState(false);



  const [isLoading, setIsLoading] = useState(false);

  const { idFormulario } = useParams();
  const navigate = useNavigate();

  if (!localStorage.getItem("trabalhadores")) {
    navigate("/");
  }

  useEffect(() => {
    const url =
      "https://backend-incomum.herokuapp.com/formulario/get/" + idFormulario;
    setIsLoading(true);
    axios
      .get(url, { headers: authHeader(localStorage.getItem("trabalhadores")) })
      .then((res) => {
        if (res.data.success) {
          const data = res.data.data;



          setcampDataPreenchimento(data.datapreenchimento);
          setcampNomeMarca(data.nome_marca);
          setcampEmail(data.email);
          setcampMDRedesSociais(data.MD_redeSociais);
          setcampMDPublicacoesPorSemana(data.MD_publicaçõesPorSemana);
          setcampMDStoriesPorSemana(data.MD_storiesPorSemana);
          setcampMDRellsPorSemana(data.MD_reelsPorSemana);
          setcampMDDesign(data.MD_design);
          setcampMDCapaPorMes(data.MD_capaPorMes);
          setcampMDCopywriting(data.MD_copywriting);
          setcampMDPlanificaçãoEditorial(data.MD_planificaçãoEditorial);
          setcampMDTempoConsultoriaDigitalPorSemana(data.MD_tempoConsultoriaDigitalPorSemana);
          setcampMDGestaoCampanhas(data.MD_gestaoCampanhas);
          setcampMDRelatorioMensal(data.MD_relatorioMensal);
          setcampMDPublicidadePaga(data.MD_publicidadePaga);
          setcampMDEmailMarketing(data.MD_emailMarketing);
          setcampMDOtimizaçãoSEO(data.MD_otimizaçãoSEO);
          setcampDGAnaliseConcorrencia(data.DG_analiseConcorrencia);
          setcampDGLogotipo(data.DG_Logotipo);
          setcampDGPaletaCores(data.DG_paletaCores);
          setcampDGSlogan(data.DG_slogan);
          setcampDGManualNormasGraficas(data.DG_manualNormasGraficas);
          setcampDGEstacionario(data.DG_estacionario);
          setcampDGBrandingRebranding(data.DG_brandingRebranding);
          setcampDGEstrategiaMarca(data.DG_estrategiaMarca);
          setcampDGRegistoMarcaDesignEditorial(data.DG_registoMarcaDesignEditorial);
          setcampWLOSIWebsiteOnePage(data.WLOSI_websiteOnePage);
          setcampWLOSILimitePaginas(data.WLOSI_limitePaginas);
          setcampWLOSIPortfolio(data.WLOSI_portfolio);
          setcampWLOSIConteudosTextuais(data.WLOSI_conteudosTextuais);
          setcampWLOSIAlojamento(data.WLOSI_alojamento);
          setcampWLOSIDominio(data.WLOSI_dominio);
          setcampWLOLOLimitePaginas(data.WLOLO_limitePaginas);
          setcampWLOLOPaginasPretende(data.WLOLO_paginasPretende);
          setcampWLOLOIntegracao(data.WLOLO_integracao);
          setcampWLOLOConteudosTextuais(data.WLOLO_conteudosTextuais);
          setcampWLOLOAlojamento(data.WLOLO_alojamento);
          setcampWLOLODominio(data.WLOLO_dominio);
          setcampCCComunicacaoEConsultoria(data.CC_comunicacaoEConsultoria);
          setcampCCConsultoriaDeMarketingComunicacao(data.CC_consultoriaDeMarketingComunicacao);
          setcampCCOrganizacaoDeEventos(data.CC_organizacaoDeEventos);
          setcampCCAssessoriaECriaçãoDeConteudo(data.CC_assessoriaECriaçãoDeConteudo);






          console.log(idFormulario + "AQUI");
        } else {
          alert("Error web service");
        }
      })
      .catch((error) => {
        alert("Error server: " + error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <div className="row col-12">
        <div className="col-2"></div>

        <div className="col-10 mt-5">
          {/*Grids*/}
          <div>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <>
                <div className="form-row justify-content-center">
                <h2 className="mt-4 text-center">
                        <b>Info formulário {campNomeMarca}</b></h2>
                  <div className="form-group col-md-6">
                  
                    <form className="justify-content-md-center">
                      <h3 className="mt-4">
                        <b>Informação da empresa</b>
                      </h3>
                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="md_storiessemana">Nome da marca</label>
                        <input
                          type="text"
                          className="form-control"
                          id="nome_marca"
                          placeholder="!ncommun"
                          value={campNomeMarca}
                          onChange={(value) =>
                            setcampNomeMarca(value.target.value)
                          }
                        />
                      </div>
                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="md_storiessemana">
                          Email de contacto
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          placeholder="!ncommun@incommun.com"
                          value={campEmail}
                          onChange={(value) => setcampEmail(value.target.value)}
                        />
                      </div>

                      <h3 className="mt-4">
                        <b>Marketing Digital</b>
                      </h3>

                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="md_redessociais">
                          Quais Redes Sociais?
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="md_redessociais"
                          placeholder="Facebook, Instagram, ..."
                          value={campMDRedesSociais}
                          onChange={(value) =>
                            setcampMDRedesSociais(value.target.value)
                          }
                        />
                      </div>

                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="md_publicacoessemana">
                          Quantas publicações por semana?
                        </label>
                        <input
                          type=""
                          className="form-control"
                          id="md_publicacoessemana"
                          placeholder="1 a 7..."
                          value={campMDPublicacoesPorSemana}
                          onChange={(value) =>
                            setcampMDPublicacoesPorSemana(value.target.value)
                          }
                        />
                      </div>

                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="md_storiessemana">
                          Quantas stories por semana?
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="md_storiessemana"
                          placeholder="1 a 7..."
                          value={campMDStoriesPorSemana}
                          onChange={(value) =>
                            setcampMDStoriesPorSemana(value.target.value)
                          }
                        />
                      </div>

                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="md_reelssemana">
                          Quantas reels por semana?
                        </label>
                        <input
                          type=""
                          className="form-control"
                          id="md_reelssemana"
                          placeholder="1 a 7..."
                          value={campMDRellsPorSemana}
                          onChange={(value) =>
                            setcampMDRellsPorSemana(value.target.value)
                          }
                        />
                      </div>

                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="md_designpublicacoes">
                          Pretende design para publicações?
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="md_designpublicacoes"
                          placeholder="Sim ou não"
                          value={campMDDesign}
                          onChange={(value) =>
                            setcampMDDesign(value.target.value)
                          }
                        />
                      </div>

                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="md_covercapames">
                          Quantas cover / capa por mês?
                        </label>
                        <input
                          type=""
                          className="form-control"
                          id="md_covercapames"
                          placeholder="1 a 3..."
                          value={campMDCapaPorMes}
                          onChange={(value) =>
                            setcampMDCapaPorMes(value.target.value)
                          }
                        />
                      </div>

                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="md_copywriting">
                          Pretende Copywriting?
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="md_copywriting"
                          placeholder="Sim ou não"
                          value={campMDCopywriting}
                          onChange={(value) =>
                            setcampMDCopywriting(value.target.value)
                          }
                        />
                      </div>

                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="md_planificacao">
                          Pretende planificação editorial?
                        </label>
                        <input
                          type=""
                          className="form-control"
                          id="md_planificacao"
                          placeholder="Sim ou não"
                          value={campMDPlanificaçãoEditorial}
                          onChange={(value) =>
                            setcampMDPlanificaçãoEditorial(value.target.value)
                          }
                        />
                      </div>

                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="md_consultoriadigital">
                          Quanto tempo de consultoria Digital por semana?
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="md_consultoriadigital"
                          placeholder="1 a 3..."
                          value={campMDTempoConsultoriaDigitalPorSemana}
                          onChange={(value) =>
                            setcampMDTempoConsultoriaDigitalPorSemana(
                              value.target.value
                            )
                          }
                        />
                      </div>

                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="md_gestaocampanhas">
                          Pretende gestão de campanhas?
                        </label>
                        <input
                          type=""
                          className="form-control"
                          id="md_gestaocampanhas"
                          placeholder="Sim ou não"
                          value={campMDGestaoCampanhas}
                          onChange={(value) =>
                            setcampMDGestaoCampanhas(value.target.value)
                          }
                        />
                      </div>

                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="md_relatoriomensal">
                          Pretende relatório mensal?
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="md_relatoriomensal"
                          placeholder="Sim ou não"
                          value={campMDRelatorioMensal}
                          onChange={(value) =>
                            setcampMDRelatorioMensal(value.target.value)
                          }
                        />
                      </div>

                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="md_publicidadepaga">
                          Pretende ter publicidade paga?
                        </label>
                        <input
                          type=""
                          className="form-control"
                          id="md_publicidadepaga"
                          placeholder="1 a 3..."
                          value={campMDPublicidadePaga}
                          onChange={(value) =>
                            setcampMDPublicidadePaga(value.target.value)
                          }
                        />
                      </div>

                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="md_emailsmsmarketing">
                          Pretende ter email & SMS Marketing?
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="md_emailsmsmarketing"
                          placeholder="Sim ou não"
                          value={campMDEmailMarketing}
                          onChange={(value) =>
                            setcampMDEmailMarketing(value.target.value)
                          }
                        />
                      </div>

                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="md_otimizacaoseosem">
                          Pretende ter otimização SEO e SEM?
                        </label>
                        <input
                          type=""
                          className="form-control"
                          id="md_otimizacaoseosem"
                          placeholder="Sim ou não"
                          value={campMDOtimizaçãoSEO}
                          onChange={(value) =>
                            setcampMDOtimizaçãoSEO(value.target.value)
                          }
                        />
                      </div>

                      <h3 className="mt-4">
                        <b>Design Gráfico</b>
                      </h3>

                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="dg_analiseconcorrencia">
                          Pretende ter análise da concorrência?
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="dg_analiseconcorrencia"
                          placeholder="Sim ou não"
                          value={campDGAnaliseConcorrencia}
                          onChange={(value) =>
                            setcampDGAnaliseConcorrencia(value.target.value)
                          }
                        />
                      </div>

                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="dg_criacaologotipo">
                          Pretende a criação de logótipo?
                        </label>
                        <input
                          type=""
                          className="form-control"
                          id="dg_criacaologotipo"
                          placeholder="Sim ou não"
                          value={campDGLogotipo}
                          onChange={(value) =>
                            setcampDGLogotipo(value.target.value)
                          }
                        />
                      </div>

                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="dg_paletacores">
                          Pretende ter uma paleta de cores?
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="dg_paletacores"
                          placeholder="Sim ou não"
                          value={campDGPaletaCores}
                          onChange={(value) =>
                            setcampDGPaletaCores(value.target.value)
                          }
                        />
                      </div>

                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="dg_sloganmarca">
                          Pretende criar um slogan para a marca?
                        </label>
                        <input
                          type=""
                          className="form-control"
                          id="dg_sloganmarca"
                          placeholder="Sim ou não"
                          value={campDGSlogan}
                          onChange={(value) =>
                            setcampDGSlogan(value.target.value)
                          }
                        />
                      </div>

                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="dg_manualnormas">
                          Pretende um manual de normas gráficas?
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="dg_manualnormas"
                          placeholder="Sim ou não"
                          value={campDGManualNormasGraficas}
                          onChange={(value) =>
                            setcampDGManualNormasGraficas(value.target.value)
                          }
                        />
                      </div>

                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="dg_estacionario">
                          Pretende um estacionário?
                        </label>
                        <input
                          type=""
                          className="form-control"
                          id="dg_estacionario"
                          placeholder="Sim ou não"
                          value={campDGEstacionario}
                          onChange={(value) =>
                            setcampDGEstacionario(value.target.value)
                          }
                        />
                      </div>

                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="dg_brandingrebranding">
                          Pretende um Branding & Rebranding?
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="dg_brandingrebranding"
                          placeholder="Sim ou não"
                          value={campDGBrandingRebranding}
                          onChange={(value) =>
                            setcampDGBrandingRebranding(value.target.value)
                          }
                        />
                      </div>

                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="dg_estrategiamarca">
                          Pretende ter uma estratégia de marca?
                        </label>
                        <input
                          type=""
                          className="form-control"
                          id="dg_estrategiamarca"
                          placeholder="Sim ou não"
                          value={campDGEstrategiaMarca}
                          onChange={(value) =>
                            setcampDGEstrategiaMarca(value.target.value)
                          }
                        />
                      </div>

                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="dg_registodemarca">
                          Pretende ter um registo de marca Design editorial?
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="dg_registodemarca"
                          placeholder="Sim ou não"
                          value={campDGRegistoMarcaDesignEditorial}
                          onChange={(value) =>
                            setcampDGRegistoMarcaDesignEditorial(
                              value.target.value
                            )
                          }
                        />
                      </div>

                      <h3 className="mt-4">
                        <b>Website e Lojas online</b>
                      </h3>

                      <h5 className="mx-4 mt-4">
                        <b>Se for site institucional:</b>
                      </h5>

                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="wl_si_websiteonepage">
                          Pretende um Website ou One Page?
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="wl_si_websiteonepage"
                          placeholder="Website ou One Page"
                          value={campWLOSIWebsiteOnePage}
                          onChange={(value) =>
                            setcampWLOSIWebsiteOnePage(value.target.value)
                          }
                        />
                      </div>

                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="wl_si_paginaspretende">
                          Quantas páginas pretende ter?
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="wl_si_paginaspretende"
                          placeholder="1 a 7..."
                          value={campWLOSILimitePaginas}
                          onChange={(value) =>
                            setcampWLOSILimitePaginas(value.target.value)
                          }
                        />
                      </div>

                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="wl_si_portefolio">Com portfólio?</label>
                        <input
                          type=""
                          className="form-control"
                          id="wl_si_portefolio"
                          placeholder="Sim ou não"
                          value={campWLOSIPortfolio}
                          onChange={(value) =>
                            setcampWLOSIPortfolio(value.target.value)
                          }
                        />
                      </div>

                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="wl_si_conteudostextuais">
                          Com Conteúdos textuais á escolha?
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="wl_si_conteudostextuais"
                          placeholder="Sim ou não"
                          value={campWLOSIConteudosTextuais}
                          onChange={(value) =>
                            setcampWLOSIConteudosTextuais(value.target.value)
                          }
                        />
                      </div>

                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="wl_si_alojamento">
                          Com alojamento?{" "}
                        </label>
                        <input
                          type=""
                          className="form-control"
                          id="wl_si_alojamento"
                          placeholder="Sim ou não"
                          value={campWLOSIAlojamento}
                          onChange={(value) =>
                            setcampWLOSIAlojamento(value.target.value)
                          }
                        />
                      </div>

                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="wl_si_dominio">Com domínio?</label>
                        <input
                          type="text"
                          className="form-control"
                          id="wl_si_dominio"
                          placeholder="Sim ou não"
                          value={campWLOSIDominio}
                          onChange={(value) =>
                            setcampWLOSIDominio(value.target.value)
                          }
                        />
                      </div>

                      <h5 className="mx-4 mt-4">
                        <b>Se for loja online:</b>
                      </h5>

                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="wl_lo_limitepaginas">
                          Pretende ter um limite de páginas?
                        </label>
                        <input
                          type=""
                          className="form-control"
                          id="wl_lo_limitepaginas"
                          placeholder="Sim ou não"
                          value={campWLOLOLimitePaginas}
                          onChange={(value) =>
                            setcampWLOLOLimitePaginas(value.target.value)
                          }
                        />
                      </div>

                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="wl_lo_paginaspretende">
                          Quantas páginas pretende ter?
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="wl_lo_paginaspretende"
                          placeholder="1 a 7..."
                          value={campWLOLOPaginasPretende}
                          onChange={(value) =>
                            setcampWLOLOPaginasPretende(value.target.value)
                          }
                        />
                      </div>

                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="wl_lo_integracao">
                          Com integração?
                        </label>
                        <input
                          type=""
                          className="form-control"
                          id="wl_lo_integracao"
                          placeholder="Sim ou não"
                          value={campWLOLOIntegracao}
                          onChange={(value) =>
                            setcampWLOLOIntegracao(value.target.value)
                          }
                        />
                      </div>

                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="wl_lo_conteudostextuais">
                          Com Conteúdos textuais á escolha?
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="wl_lo_conteudostextuais"
                          placeholder="Sim ou não"
                          value={campWLOLOConteudosTextuais}
                          onChange={(value) =>
                            setcampWLOLOConteudosTextuais(value.target.value)
                          }
                        />
                      </div>

                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="wl_lo_alojamento">
                          Com alojamento?{" "}
                        </label>
                        <input
                          type=""
                          className="form-control"
                          id="wl_lo_alojamento"
                          placeholder="Sim ou não"
                          value={campWLOLOAlojamento}
                          onChange={(value) =>
                            setcampWLOLOAlojamento(value.target.value)
                          }
                        />
                      </div>

                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="wl_lo_dominio">Com domínio?</label>
                        <input
                          type="text"
                          className="form-control"
                          id="wl_lo_dominio"
                          placeholder="Sim ou não"
                          value={campWLOLODominio}
                          onChange={(value) =>
                            setcampWLOLODominio(value.target.value)
                          }
                        />
                      </div>

                      <h3 className="mt-4">
                        <b>Comunicação e consultória</b>
                      </h3>

                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="cc_comunicacaoconsultoria">
                          Pretende ter comunicação & Consultoria?
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc_comunicacaoconsultoria"
                          placeholder="Sim ou não"
                          value={campCCComunicacaoEConsultoria}
                          onChange={(value) =>
                            setcampCCComunicacaoEConsultoria(value.target.value)
                          }
                        />
                      </div>

                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="cc_consultoriamarketing">
                          Pretende ter consultoria de marketing e comunicação?
                        </label>
                        <input
                          type=""
                          className="form-control"
                          id="cc_consultoriamarketing"
                          placeholder="Sim ou não"
                          value={campCCConsultoriaDeMarketingComunicacao}
                          onChange={(value) =>
                            setcampCCConsultoriaDeMarketingComunicacao(
                              value.target.value
                            )
                          }
                        />
                      </div>

                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="cc_organizacaoeventos">
                          Pretende ter organização de eventos?
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc_organizacaoeventos"
                          placeholder="Sim ou não"
                          value={campCCOrganizacaoDeEventos}
                          onChange={(value) =>
                            setcampCCOrganizacaoDeEventos(value.target.value)
                          }
                        />
                      </div>

                      <div className="form-group mt-3 mx-4">
                        <label htmlFor="cc_assessoriacriacao">
                          Pretende ter uma assessoria e criação de conteúdo?
                        </label>
                        <input
                          type=""
                          className="form-control"
                          id="cc_assessoriacriacao"
                          placeholder="Sim ou não"
                          value={campCCAssessoriaECriaçãoDeConteudo}
                          onChange={(value) =>
                            setcampCCAssessoriaECriaçãoDeConteudo(
                              value.target.value
                            )
                          }
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  
}
