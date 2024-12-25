import React, { Component } from "react";
import { useSearchParams } from "react-router-dom";
import NoteItemList from "../components/NoteItemList";
import SearchNote from "../components/SearchNote";
import { getArchivedNotes, searchNotes } from "../utils/local-data";
import PropTypes from "prop-types";

function ArsipPageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const title = searchParams.get("title");

  function changeSearchParams(keyword) {
    setSearchParams({ title: keyword });
  }

  return <ArsipPage onSearch={changeSearchParams} defaultKeyword="" />;
}

class ArsipPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getArchivedNotes(),
      keyword: props.defaultKeyword || "",
    };

    this.onSearch = this.onSearch.bind(this);
  }

  onSearch(keyword) {
    this.setState({ keyword });

    this.props.onSearch(keyword);
  }

  render() {
    const notes = searchNotes(this.state.notes, this.state.keyword);

    return (
      <section className="archives-page">
        <h2>Catatan Arsip</h2>
        <SearchNote onSearch={this.onSearch} />
        <NoteItemList notes={notes} />
      </section>
    );
  }
}

ArsipPage.propTypes = {
  onSearch: PropTypes.func.isRequired,
  defaultKeyword: PropTypes.string.isRequired,
};

export default ArsipPageWrapper;
