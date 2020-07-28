import React, { useContext } from 'react';
import MaterialTable from 'material-table';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { transparentize, darken } from 'polished';
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';

import { fonts } from '../../styles/scale';
import { capitalize } from '../../utils/text';

export default function EnviaDataTable({
  title,
  columns,
  tableData,
  dataVisualization,
  editableOptions,
  isSelectable,
  actions,
}) {
  const { singular, plural } = dataVisualization;
  const { colors } = useContext(ThemeContext);
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: colors.primary,
      },
      secondary: {
        main: colors.highlight,
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <MaterialTable
        title={title}
        columns={columns}
        data={tableData}
        localization={{
          pagination: {
            labelDisplayedRows: '{from}-{to} de {count}',
            labelRowsSelect: 'linhas',
            labelRowsPerPage: `${capitalize(plural)} por página:`,
            firstAriaLabel: 'Primeira página',
            firstTooltip: 'Primeira página',
            previousAriaLabel: 'Página anterior',
            previousTooltip: 'Página anterior',
            nextAriaLabel: 'Próxima página',
            nextTooltip: 'Próxima Página',
            lastAriaLabel: 'Última Página',
            lastTooltip: 'Última Página',
          },
          toolbar: {
            nRowsSelected: `{0} ${plural} selecionados`,
            searchTooltip: `Buscar ${singular}`,
            searchPlaceholder: `Buscar ${singular}`,
          },
          header: {
            actions: 'Ações',
          },
          body: {
            emptyDataSourceMessage: 'Sem dados para mostrar.',
            filterRow: {
              filterTooltip: 'Filtro',
            },
            addTooltip: `Adicionar ${singular}`,
            editTooltip: `Editar ${singular}`,
            editRow: {
              deleteText: `Tem certeza que deseja apagar este ${singular}?`,
              cancelTooltip: 'Cancelar',
              saveTooltip: `Salvar ${singular}`,
            },
            deleteTooltip: `Apagar ${singular}`,
          },
        }}
        editable={editableOptions}
        // onSearchChange={data => alert(data)}
        // onRowSelected={row => alert(row)}
        options={{
          selection: isSelectable,
          headerStyle: {
            backgroundColor: darken(0.08, colors.highlight),
            color: transparentize(0.2, colors.icon),
            // textAlign: 'center',
            fontSize: fonts.labelFontSize,
          },
          rowStyle: {
            backgroundColor: transparentize(0.3, colors.backgroundHighlight),
            textAlign: 'center',
          },
          actionsColumnIndex: -1,
        }}
        actions={actions}
      />
    </MuiThemeProvider>
  );
}

EnviaDataTable.propTypes = {
  title: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
  // setTableData: PropTypes.func.isRequired,
  dataVisualization: PropTypes.objectOf(PropTypes.string),
  editableOptions: PropTypes.objectOf(PropTypes.func),
  isSelectable: PropTypes.bool,
  actions: PropTypes.arrayOf(PropTypes.object),
};

EnviaDataTable.defaultProps = {
  dataVisualization: { singular: 'linha', plural: 'linhas' },
  editableOptions: {},
  isSelectable: false,
  actions: [],
};
