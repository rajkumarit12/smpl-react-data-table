function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var styles = {"test":"_3ybTi","Cell":"_2o_Iv","table":"_FnYjQ","dataTable":"_3_teI","scrollContainer":"_3AALV"};

var th = function th(content) {
  return /*#__PURE__*/React.createElement("th", {
    className: "Cell Cell-header"
  }, content);
};

var td = function td(content) {
  return /*#__PURE__*/React.createElement("td", {
    className: "Cell"
  }, content);
};

function Cell(_ref) {
  var content = _ref.content,
      header = _ref.header;
  return header ? th(content) : td(content);
}

function DataTable(props) {
  var _props$headings = props.headings,
      headings = _props$headings === void 0 ? [] : _props$headings,
      _props$rows = props.rows,
      rows = _props$rows === void 0 ? [] : _props$rows;

  function renderHeading() {
    return headings.map(function (_cell, index) {
      return /*#__PURE__*/React.createElement(Cell, {
        key: "heading-" + index,
        content: _cell,
        header: true
      });
    });
  }

  function renderRows() {
    return rows.map(function (_cell, cellIndex) {
      return /*#__PURE__*/React.createElement("tr", {
        key: "row-" + cellIndex
      }, _cell.map(function (item, index) {
        return /*#__PURE__*/React.createElement(Cell, {
          key: "rows-" + cellIndex + "-" + index,
          content: item,
          header: false
        });
      }));
    });
  }

  return /*#__PURE__*/React.createElement("div", {
    className: styles.dataTable
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.scrollContainer
  }, /*#__PURE__*/React.createElement("table", {
    className: styles.table
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    key: "heading"
  }, renderHeading())), /*#__PURE__*/React.createElement("tbody", null, renderRows()))));
}

module.exports = DataTable;
//# sourceMappingURL=index.js.map
