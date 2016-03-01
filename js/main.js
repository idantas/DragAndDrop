
    var li = document.querySelectorAll('#dropzoneul li');
    [].forEach.call(li, function(event) {

        //drag start
        event.addEventListener('dragstart', function(e){
            this.className='dragstart';
            //variavel global para guardar o conteudo
            dragSrl=this;
            e.dataTransfer.effectAllowed = 'move';

            //transfere o conteudo desse objeto para o dataTransfere.setData();
            e.dataTransfer.setData('text/html', this.innerHTML)

        }, false);

        //manipulação de objeto de destino
        event.addEventListener('drop', function(e){
            e.preventDefault();
            this.className='dragend';
            //só troca o conteudo se objeto que está vindo for diferente do objeto atual;
            if(dragSrl != this){
                dragSrl.innerHTML = this.innerHTML;
//                obtem o conteudo do novo objeto atraves do dataTransfer.getData();
                this.innerHTML = e.dataTransfer.getData('text/html');
            }
            e.dataTransfer.dropEffect = 'move';
            return false;
        }, false);


        //evento assionado ao soltar objeto
        event.addEventListener('dragend', function(e){
            e.preventDefault();
            this.className='dragmove';
        }, false);

        //evento assionado ao ter um outro objeto passando por cima do atual
        event.addEventListener('dragover', function(e){
            e.preventDefault();
            this.className='dragover';
        }, false);

        //evento assionado quando outro objeto sai de cima do atual
        event.addEventListener('dragleave', function(e){
            e.preventDefault();
            this.className='';
            return false;
        }, false);

    });
