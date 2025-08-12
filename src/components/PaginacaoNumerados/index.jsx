import React, {useState} from "react";

function PaginacaoNumerados(){
    const [paginaAtual, setPaginaAtual] = useState(1);
    const totalPaginas = 4;

    const irParaPag = (num) => {
        if (num >= 1 && num <= totalPaginas){
            setPaginaAtual(num);
        }
    };

    return (
        <div style={{ display: 'inline-flex', border: '1px solid #ccc', borderRadius: '4px' }}>
        {/* Botão anterior */}
        <button 
          onClick={() => irParaPagina(paginaAtual - 1)} 
          disabled={paginaAtual === 1}
          style={{ padding: '8px 12px', border: 'none', cursor: 'pointer' }}
        >
          ‹
        </button>
  
        {/* Botões das páginas */}
        {[...Array(totalPaginas)].map((_, i) => {
          const num = i + 1;
          return (
            <button
              key={num}
              onClick={() => irParaPagina(num)}
              style={{
                padding: '8px 12px',
                border: 'none',
                cursor: 'pointer',
                backgroundColor: paginaAtual === num ? '#1570EF' : 'transparent',
                color: paginaAtual === num ? 'white' : '#1570EF',
                borderRight: i === totalPaginas - 1 ? 'none' : '1px solid #ccc',
              }}
            >
              {num}
            </button>
          );
        })}
  
        {/* Botão próximo */}
        <button 
          onClick={() => irParaPagina(paginaAtual + 1)} 
          disabled={paginaAtual === totalPaginas}
          style={{ padding: '8px 12px', border: 'none', cursor: 'pointer' }}
        >
          ›
        </button>
      </div>
    );
}

export default PaginacaoNumerados;