import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ModeloAlertaService } from 'src/app/shared/modelo-alerta.service';
import { ContaService } from 'src/app/services/conta.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup
  submitted = false

  constructor(private fb: FormBuilder, private router: Router,
    private modal: ModeloAlertaService, private contaService: ContaService) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      login: [null, [Validators.required]],
      senha: [null, [Validators.required]]
    })
  }


  hasError(campo: string) {
    return this.form.get(campo).errors
  }


  async onSubmit() {

    try {

      const resultado = await this.contaService.login(this.form.value)
      console.log(`login efetudado: ${resultado}`)
      console.log(resultado)

      if (resultado == false) {
        this.handleError()
      }

      this.router.navigate([''])

    } catch (error) {
      console.error(error)
    }

  }

  handleError() {

    this.modal.showAlertDanger('Usuario ou senha incorretos')

  }

}
