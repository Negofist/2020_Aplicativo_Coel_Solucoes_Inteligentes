from infra.aplicacao_navegacao.aplicacao_navegacao_dao import \
    listar as dao_listar, \
    consultar as dao_consultar

def listar():
    return [aplicacao_navegacao for aplicacao_navegacao in dao_listar()]


def localizar(id):
    aplicacao_navegacao = dao_consultar(id)
    if aplicacao_navegacao is None:
        return None
    return aplicacao_navegacao
