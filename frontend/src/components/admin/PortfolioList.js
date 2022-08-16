import React, { useState } from "react";

import { Table, Button, Image, Container } from "react-bootstrap";

import styled from "styled-components";

import moment from "moment";

import { useApi } from "../../hooks/useApi";

import Dialog from "./Dialog";

import PortfolioForm from "./PortfolioForm";

import { deleteItem, editItem, addItem } from "../../services/api";

const PortfolioList = () => {
  const handleDel = (slug) => {
    deleteItem(slug);
  };
  const handleAdd = (slug, data) => {
    addPortfolioItem(data);
  };
  const handleEdit = (slug, data) => {
    editPortfolioItem(slug, data);
  };
  const [title, setTitle] = useState();
  const [shortDescription, setShortDescription] = useState();
  const [longDescription, setLongDescription] = useState();
  const [image, setImage] = useState();
  const [slug, setSlug] = useState();
  const [tech, setTech] = useState();
  const [action] = useState({
    del: {
      header: "Confirmar Exclusão?",
      btnVariant: "danger",
      btnLabel: "Confirmar",
      showBody: true,
      body: "Você tem certeza que desejar excluir isso?",
      callback: handleDel,
    },
    edit: {
      header: "Editar Portfolio",
      btnVariant: "primary",
      btnLabel: "Salvar",
      showBody: false,
      callback: handleEdit,
    },
    add: {
      header: "Adicionar Novo Portfolio",
      btnVariant: "primary",
      showBody: false,
      btnLabel: "Salvar",
      callback: handleAdd,
    },
  });
  const [currentAction, setCurrentAction] = useState({
    header: "",
    btnVariant: "",
    btnLabel: "",
    body: "",
  });
  const [show, setShow] = useState(false);
  const { data } = useApi("/portfolio");

  const handleShow = (portfolio, actn) => {
    setCurrentAction(actn);
    setShow(true);
    setTitle(portfolio?.title || "");
    setShortDescription(portfolio?.description || "");
    setLongDescription(portfolio?.longDescription || "");
    setImage(portfolio?.image || "");
    setSlug(portfolio?.slug || "");
    setTech(portfolio?.technologies || []);
  };

  const addPortfolioItem = (data) => {
    const tech = data.tech.map((i) => {
      //O delete não remove o valor, ele apenas tira a chave do objeto (apaga)
      delete i._id;
      return i;
    });

    const newPortfolioItem = {
      title: data.title,
      description: data.shortDescription,
      longDescription: data.longDescription,
      image: data.image,
      technologies: tech,
    };

    addItem(newPortfolioItem);
  };

  const editPortfolioItem = (slug, data) => {
    const tech = data.tech.map((i) => {
      delete i._id;
      return i;
    });

    const newPortfolioItem = {
      title: data.title,
      description: data.shortDescription,
      longDescription: data.longDescription,
      image: data.image,
      technologies: tech,
    };

    editItem(slug, newPortfolioItem);
  };

  return (
    <Container>
      <Button
        variant="primary"
        size="lg"
        onClick={() => handleShow(null, action.add)}
      >
        Adicionar Novo
      </Button>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Imagem</th>
            <th>Título</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((item) => {
            return (
              <tr key={item.slug}>
                <td>
                  <Logo src={item.image} thumbnail />
                </td>
                <td>{item.title}</td>
                <td>{moment(item.createdAt).format("DD/MMM/YYYY")}</td>
                <td>
                  <Button
                    variant="info"
                    onClick={() => handleShow(item, action.edit)}
                  >
                    Editar
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleShow(item, action.del)}
                  >
                    Excluir
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {/* O que está dentro do dialog,
      é o children que está sendo chamado no Dialog.js */}
      <Dialog
        show={show}
        setShow={setShow}
        currentAction={currentAction}
        slug={slug}
      >
        {currentAction.showBody && currentAction.body}

        {!currentAction.showBody && (
          <PortfolioForm
            title={title}
            setTitle={setTitle}
            shortDescription={shortDescription}
            setShortDescription={setShortDescription}
            longDescription={longDescription}
            setLongDescription={setLongDescription}
            image={image}
            setImage={setImage}
            slug={slug}
            tech={tech}
            setTech={setTech}
          />
        )}
      </Dialog>
    </Container>
  );
};

const Logo = styled(Image)`
  height: 100px;
`;

export default PortfolioList;
