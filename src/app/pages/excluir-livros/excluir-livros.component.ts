import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ILivro } from 'src/app/interface/livro';
import { LivrosService } from 'src/services/livros.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-excluir-livros',
  templateUrl: './excluir-livros.component.html',
  styleUrls: ['./excluir-livros.component.css']
})
export class ExcluirLivrosComponent {
  livros: ILivro[] = [];
  constructor(private livrosService: LivrosService, private route: ActivatedRoute, private router: Router) {}

  livroId = 0;
  ngOnInit() {
    this.livroId = Number(this.route.snapshot.paramMap.get('id'));
    this.livrosService.excluirLivro(this.livroId).subscribe(result => {
        Swal.fire(
          'Tudo certo!',
          'Cadastro excluído com sucesso!',
          'success'
        );
        this.router.navigate(['/livros']);
    }, error => {
        console.error(error);
    })
  }
}
