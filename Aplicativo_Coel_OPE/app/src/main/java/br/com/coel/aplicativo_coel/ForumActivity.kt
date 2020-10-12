package br.com.coel.aplicativo_coel

import android.os.Bundle
import kotlinx.android.synthetic.main.activity_mensagens.*
import kotlinx.android.synthetic.main.navigation_view.*
import kotlinx.android.synthetic.main.toolbar.*

class ForumActivity : DebugActivity () {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_forum)

        this.genericLayoutMenu = layoutMenuLateral
        this.genericMenuLateral = menu_lateral

        setSupportActionBar(toolbar_view)  // Seleciona a toolbar criada no layout
        supportActionBar?.title = getString(R.string.texto_titulo_forum) // Modo para definir texto do menu
        supportActionBar?.setDisplayHomeAsUpEnabled(true)  // habilita botão de retorno no menu

        configuraMenuLateral()

    }
}