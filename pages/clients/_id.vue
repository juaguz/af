<template lang="pug">
div
  CustomMenu
  section(class="hero is-small is-primary is-bold")
    .hero-body
      .container.is-fluid
        .columns.is-vcentered
          .column
            h1(class="title") Nextel Srl
            p.subtitle 
            span Nro Deudor: {{idDeudor}} {{field('a93a3795-2525-489b-a267-9b0ac2e2583a','label')}}: {{client[field('a93a3795-2525-489b-a267-9b0ac2e2583a','field')]}}
            span.is-pulled-right {{field('fe25075f-b409-4c44-a4aa-c83e37db9acb', 'label')}}: {{client[field('fe25075f-b409-4c44-a4aa-c83e37db9acb','field')]}}


    .hero-foot
      .container
  tabs
    tab(name="Estado de Cuenta", icon="fa-id-card" , selected="true")
      .section
        h4.title Datos del Deudor
        hr
        .columns
          .column.is-one-fifth
            label {{field('fe25075f-b409-4c44-a4aa-c83e37db9acb', 'label')}}
            input.input.is-small(v-model="client[field('fe25075f-b409-4c44-a4aa-c83e37db9acb','field')]")
          .column.is-one-fifth
            label {{field('bdb2909b-8384-41b9-9f02-91f3c9e0f3ad', 'label')}}
            input.input.is-small(v-model="client[field('bdb2909b-8384-41b9-9f02-91f3c9e0f3ad','field')]")
          .column.is-one-fifth
            label {{field('fed0a02c-d4d2-4314-9992-61a671a64a51', 'label')}}
            input.input.is-small(v-model="client[field('fed0a02c-d4d2-4314-9992-61a671a64a51','field')]")
          .column.is-one-fifth
            label {{field('ca7bdf25-48a1-4db8-8a48-cdd1c7a2f969', 'label')}}
            input.input.is-small(v-model="client[field('ca7bdf25-48a1-4db8-8a48-cdd1c7a2f969','field')]")
          .column.is-one-fifth
            label {{field('666fd412-5797-4f8d-8a07-475763a84306', 'label')}}
            input.input.is-small(v-model="client[field('666fd412-5797-4f8d-8a07-475763a84306','field')]")
        .columns
          .column.is-one-fifth
            label {{field('ef3f5f6f-f115-4c52-9d13-d2f7339448c2', 'label')}}
            input.input.is-small(v-model="client[field('ef3f5f6f-f115-4c52-9d13-d2f7339448c2','field')]")
          .column.is-one-fifth
            label {{field('00f6160c-49dc-47ec-a104-a3d4c790aecf', 'label')}}
            input.input.is-small(v-model="client[field('00f6160c-49dc-47ec-a104-a3d4c790aecf','field')]")
          .column.is-one-fifth
            label {{field('841cc30e-bed6-411f-86fc-e3005935c781', 'label')}}
            input.input.is-small(v-model="client[field('841cc30e-bed6-411f-86fc-e3005935c781','field')]")
          .column.is-one-fifth
            label {{field('aada537d-f5d4-45fd-9c1c-ff45bfa3d334', 'label')}}
            input.input.is-small(v-model="client[field('aada537d-f5d4-45fd-9c1c-ff45bfa3d334','field')]")
          .column.is-one-fifth
            label {{field('6ff52969-7bc8-4d45-8460-7d36d89a98ba', 'label')}}
            input.input.is-small(v-model="client[field('6ff52969-7bc8-4d45-8460-7d36d89a98ba','field')]")
        .columns
          .column.is-one-fifth
            label {{field('4ab174a7-c86f-4861-98ca-0386460532dd', 'label')}}
            input.input.is-small(v-model="client[field('4ab174a7-c86f-4861-98ca-0386460532dd','field')]")
          .column.is-one-fifth
            label {{field('51449720-90b6-4acd-bbfa-0eed5f805c0a', 'label')}}
            input.input.is-small(v-model="client[field('51449720-90b6-4acd-bbfa-0eed5f805c0a','field')]")
          .column.is-one-fifth
            label {{field('be52656d-d629-45fb-a5b1-225799dfc69d', 'label')}}
            input.input.is-small(v-model="client[field('be52656d-d629-45fb-a5b1-225799dfc69d','field')]")    
          .column.is-one-fifth
            label Codigo de Estado
            .control
                .select
                  select.select.is-small(v-model="client.codsitu")
                    option(v-for="codigoEstado in combos.codigosEstados", :value="codigoEstado.param_3") {{codigoEstado.descripcio}}
          .column.is-one-fifth
            label Codigo de Situacion
            .control
                .select
                  select.select.is-small(v-model="client.codestados")
                    option(v-for="codSituacion in combos.codigosSituacion", :value="codSituacion.param_3") {{codSituacion.descripcio}}
          
      .section
        h4.title Fechas
        hr
        .columns
          .column.is-2
            label {{field('b74fdd9e-078a-4c2d-8ec7-7aab474c5684', 'label')}}
            input.input.is-small(v-model="client[field('b74fdd9e-078a-4c2d-8ec7-7aab474c5684','field')]")
          .column.is-2
            label {{field('ca915965-1942-45ca-acc7-290e0c09132d', 'label')}}
            input.input.is-small(v-model="client[field('ca915965-1942-45ca-acc7-290e0c09132d','field')]")
          .column.is-2
            label {{field('b8bea625-380b-4290-a0e7-52f146c3a616', 'label')}}
            input.input.is-small(v-model="client[field('b8bea625-380b-4290-a0e7-52f146c3a616','field')]")
          .column.is-2
            label {{field('b608697c-d4e0-4564-8cae-65ba676a7f3e', 'label')}}
            input.input.is-small(v-model="client[field('b608697c-d4e0-4564-8cae-65ba676a7f3e','field')]")
          .column.is-2
            label {{field('8ae909a4-d105-41fd-80c3-28f6e11c90a4', 'label')}}
            input.input.is-small(v-model="client[field('8ae909a4-d105-41fd-80c3-28f6e11c90a4','field')]")
      .section
        h4.title Telefonos
        hr
        .columns.telefonos
          .column.is-2
            input.input.is-small(v-model="client.telefono1")
          .column.is-2    
            input.input.is-small(v-model="client.telefono2")
          .column.is-2
            input.input.is-small(v-model="client.telefono3")
          .column.is-2
            input.input.is-small(v-model="client.telefono4")
          .column.is-2
            input.input.is-small(v-model="client.telefono5")
          
      .section
        h4.title Observaciones
        hr
        .tile.box.is-vertical
          textarea.textarea(v-model="newComentario")
          .control
            button.button.is-info(v-on:click="guardarObservacion") Guardar
          hr
          p(v-html="client.comentario")


    tab(name="Facturas", v-on:active="getFacturas", icon="fa-file-o")
      .section
        article.message.is-info(v-if="facturas.length <= 0")
          .message-header
            p No Hay Facturas Disponibles
          .message-body
            | No se encontraron facturas para este deudor
        table.table.is-bordered.is-striped.is-narrow.is-fullwidth.is-hoverable(v-if="facturas.length > 0")
          thead
            th Empresa
            th Deudor
            th Nro Empresa
            th Remesa
            th Comprobante
            th Fecha Comprobante
            th Fecha Vencimiento
            th Importe
            th importe1
            th importe2
            th importe3
            th importe4
            th convenio
            th car_nro
            th car_sec
            th uccod1
            th uccod2
            th uccod3
            th uccod4
            th ucdod5
            th uccod6
            th uccod7
            th uccod8
            th uccod9
            th uccod10
            th uccod11
            th uccod12
            th uccod13
            th pago
            th codbar
            th ucfec1
            th ucfec2
          tbody
            tr(v-for="factura in facturas")
              td {{factura.empresa}}
              td {{factura.deudor}}
              td {{factura.nroemp}}
              td {{factura.remesa}}
              td {{factura.comprobant}}
              td {{factura.f_comp}}
              td {{factura.f_vto}}
              td {{factura.importe}}
              td {{factura.importe1}}
              td {{factura.importe2}}
              td {{factura.importe3}}
              td {{factura.importe4}}
              td {{factura.convenio}}
              td {{factura.car_nro}}
              td {{factura.car_sec}}
              td {{factura.uccod1}}
              td {{factura.uccod2}}
              td {{factura.uccod3}}
              td {{factura.uccod4}}
              td {{factura.uccod5}}
              td {{factura.uccod6}}
              td {{factura.uccod7}}
              td {{factura.uccod8}}
              td {{factura.uccod9}}
              td {{factura.uccod10}}
              td {{factura.uccod11}}
              td {{factura.uccod12}}
              td {{factura.uccod13}}
              td {{factura.pago}}
              td {{factura.codbar}}
              td {{factura.ucfec1}}
              td {{factura.ucfec2}}
    tab(name="Pagos", v-on:active="getPagos", icon="fa-usd")
      .section
        .dropdown.is-hoverable
          .dropdown-trigger
            button.button.is-info(aria-haspopup='true', aria-controls='dropdown-menu')
              span Nuevo Pago
              span.icon.is-small
                i.fa.fa-angle-down(aria-hidden='true')
          #dropdown-menu.dropdown-menu(role='menu')
            .dropdown-content
              a.dropdown-item(href='#',v-for="tippago in combos.tipPago" ,v-on:click="openModalPagos(tippago.param_2)")
                | {{tippago.descripcio}}
              //- a.dropdown-item(href='#', v-on:click="toggleModal('pagos_deudor')")
              //-   | Pagos informados por el deudor / Pagos informados fuerda de cartera / Promesas de pago
              //- hr.dropdown-divider
              //- a.dropdown-item
              //-   | Pagos efectuados en Estudio / Emision de Recibo de Pagos
              //- hr.dropdown-divider
              //- a.dropdown-item
              //-   | Promesas de Pago Telmex

        table.table.is-bordered.is-striped.is-narrow.is-fullwidth.is-hoverable(v-if="pagos.length > 0")
          thead
            th {{ field('a442cf22-87ad-4261-9534-e20218d94d5c', 'label') }}
            th {{ field('bed7b3f7-752e-4c0c-8856-d7a574f8364a', 'label') }}
            th {{ field('887b5a61-d008-4904-a796-1c5134b70a6e', 'label') }}
            th {{ field('e2184e80-ccd8-4245-974b-0f9e18c00634', 'label') }}
            th {{ field('33784626-89ab-498f-bbc3-71d24d9c3870', 'label') }}
            th {{ field('be573f50-91f9-40fb-a23e-fb33ba8f56bc', 'label') }}
            th {{ field('07d189fe-68a7-4f30-b530-c74ce8d06df1', 'label') }}
            th {{ field('6e0a39a3-6998-4f64-abfd-8905e9af9b5f', 'label') }}
            th {{ field('523d5a11-9971-4d51-8ce5-16e2a9ff3d4f', 'label') }}
            th {{ field('68bcd230-f9bd-450b-9fe4-098e96dfa022', 'label') }}
            th {{ field('14b14a98-f219-4cd2-9cf0-99c9178004ec', 'label') }}
            th {{ field('81e34557-2382-4a62-9fd3-4098ec7c52c6', 'label') }}
            th {{ field('df8c27a3-1fe0-448a-8dac-0eb8038ea14e', 'label') }}
            th {{ field('3e575654-fce7-4a99-9245-93c13c73d564', 'label') }}
            th {{ field('e8e7512b-b387-4824-8003-18e7781c2b81', 'label') }}
            th {{ field('871f4c82-a587-47d4-8456-4fca44a0cca0', 'label') }}
            th {{ field('c6fd7096-7b39-4c05-a2b4-9c69c5a7eb98', 'label') }}
            th {{ field('0cc05be0-8931-4281-b565-bee30ca8443e', 'label') }}
            th Acciones
          tbody
            tr(v-for="pago in pagos")
              td {{ pago[field('a442cf22-87ad-4261-9534-e20218d94d5c', 'field')] }}
              td {{ pago[field('bed7b3f7-752e-4c0c-8856-d7a574f8364a', 'field')] }}
              td {{ pago[field('887b5a61-d008-4904-a796-1c5134b70a6e', 'field')] }}
              td {{ pago[field('e2184e80-ccd8-4245-974b-0f9e18c00634', 'field')] }}
              td {{ pago[field('33784626-89ab-498f-bbc3-71d24d9c3870', 'field')] }}
              td {{ pago[field('be573f50-91f9-40fb-a23e-fb33ba8f56bc', 'field')] }}
              td {{ pago[field('07d189fe-68a7-4f30-b530-c74ce8d06df1', 'field')] }}
              td {{ pago[field('6e0a39a3-6998-4f64-abfd-8905e9af9b5f', 'field')] }}
              td {{ pago[field('523d5a11-9971-4d51-8ce5-16e2a9ff3d4f', 'field')] }}
              td {{ pago[field('68bcd230-f9bd-450b-9fe4-098e96dfa022', 'field')] }}
              td {{ pago[field('14b14a98-f219-4cd2-9cf0-99c9178004ec', 'field')] }}
              td {{ pago[field('81e34557-2382-4a62-9fd3-4098ec7c52c6', 'field')] }}
              td {{ pago[field('df8c27a3-1fe0-448a-8dac-0eb8038ea14e', 'field')] }}
              td {{ pago[field('3e575654-fce7-4a99-9245-93c13c73d564', 'field')] }}
              td {{ pago[field('e8e7512b-b387-4824-8003-18e7781c2b81', 'field')] }}
              td {{ pago[field('871f4c82-a587-47d4-8456-4fca44a0cca0', 'field')] }}
              td {{ pago[field('c6fd7096-7b39-4c05-a2b4-9c69c5a7eb98', 'field')] }}
              td {{ pago[field('0cc05be0-8931-4281-b565-bee30ca8443e', 'field')] }}
              td
                a(v-on:click="editarPago(pago)") Editar 
                span | 
                a(v-on:click="eliminarPago(pago)") Anular
    
    tab(name="Recibos" v-on:activate="getRecibos")
      .section
        button.button.is-info(v-on:click="toggleModal('recibos')") Nuevo Recibo
        table.table.is-bordered.is-striped.is-narrow.is-fullwidth.is-hoverable
          thead
            tr
              th Fecha
              th Cuit
              th Tipo Recibo
              th Total
              th Acciones
          tbody
            tr(v-for="recibo in recibos")
              td {{recibo.fecha}}
              td {{client.cuitdoc}}
              td Recibo {{recibo.tiporec}}
              td {{recibo.total}}
              td 
                a(@click="recibo_detalle(recibo)") Detalle

    tab(name="Convenios", icon="fa-handshake-o", v-on:active="getConvenios")
      .section
        button.button.is-info(v-on:click="toggleModal('nuevo_convenio')") Nuevo Convenio
      .section
        .tile.box.is-vertical(v-for="convenio in convenios")
          .columns
            .column.is-4
              span Fecha de Convenio {{convenio.fecha}}
            .column.is-4
              span Importe {{convenio.importe}}
            .column.is-4
              span Nro de Convenio {{convenio.convenio}}

          table.table.is-bordered.is-striped.is-narrow.is-fullwidth.is-hoverable
            thead
              th Cuota
              th Fecha
              th Importe
            tbody
              tr(v-for='cuota in parseInt(convenio.cuotas)')  
                td {{cuota}}
                td {{getConvenioData(convenio,cuota,'fecha')}}
                td $ {{getConvenioData(convenio,cuota,'importe')}}

    //tab(name="Complementos", icon="fa-cogs")
      //- div hola hola
    //tab(name="Info/Procesos", icon="fa-info-circle")
      //- div hola hola
    tab(name="Politicas", icon="fa-legal")
      div(v-for='s in speech')
        .tile.box.is-vertical(v-if="s.politicatx")
          p {{s.politicatx}}
        hr(v-if="s.speech")
    tab(name="Speech", icon="fa-comment")
      div(v-for='s in speech')
        .tile.box.is-vertical(v-if="s.speech")
          p {{s.speech}}
        hr(v-if="s.speech")
    tab(name="Automsg", icon="fa-phone")
      .section
        table.table.is-bordered.is-striped.is-narrow.is-fullwidth.is-hoverable
          thead
            th Deudor
            th Fecha
            th Concepto
            th Detalle
          tbody
            tr(v-for="observacion in observaciones") 
              td {{observacion.deudor}}
              td {{observacion.datetim}}
              td {{observacion.concepto}}
              td {{observacion.detalle}}

  .modal(:class="{ 'is-active': modals.nuevo_convenio }")
    .modal-background
    .modal-card
      header.modal-card-head
        .modal-card-title Generacion de Convenio de Pago
        button.delete(aria-label="close", v-on:click="toggleModal('nuevo_convenio')")
      section(class="modal-card-body")
        .columns
          .column.is-4
            label Fecha de Convenio
            datepicker(placeholder="Ingresar Fecha", v-model="convenio.fecha")
            
            //- b-datepicker(placeholder="Click to select..." icon="calendar-today")
          .column.is-4
            label Cuotas
            input.input(type="number",min="0",max="36",v-model.number="convenio.cuotas")
          .column.is-4
            label Tipo de Acuerdo
            //- input.input(type="text",v-model="convenio.acuerdo")
            .control
                .select
                  select.select(v-model="convenio.acuerdo")
                    option(v-for="tipoConvenio in combos.tiposConvenios", :value="tipoConvenio.id") {{tipoConvenio.descripcio}}
                  p(class="help is-danger")
        .columns
         .column.is-4  
           label Nro de Convenio
           input.input(v-model="convenio.convenio")     
        .columns
          .column.is-4  
            label Deuda Historica
            input.input(v-model="convenio.historico")
          .column.is-4  
            label Deuda Actualizada
            input.input(v-model="convenio.historico")   
          .column.is-4  
            label Total Convenio
            input.input(v-model="convenio.importe")
        .coulmns(v-for="cuota in convenio.cuotas")
          .column
            label Fecha{{cuota}}
            datepicker(v-model.lazy="fechas_convenios[cuota]" v-on:change="setConvenio(cuota, 'fecha')")
          .column
            label Importe{{cuota}}
            input.input(v-model="importes_convenios[cuota]")                

      footer.modal-card-foot
        button(class="button is-success", v-on:click="saveConvenio") Guardar
        button(class="button", v-on:click="toggleModal('nuevo_convenio')") Cancelar            
  
  .modal(:class="{ 'is-active': modals.recibo_detalle }")
    .modal-background
    .modal-card
      header.modal-card-head
        p.modal-card-title Detalle de Recibo
        button.delete(aria-label="close", v-on:click="toggleModal('recibo_detalle')")
      section(class="modal-card-body")
        .columns 
          .column.is-3
            p Fecha
          .column.is-3
            p Nro Cheque
          .column.is-3
            p Banco
          .column.is-3
            p Importe
        .columns(v-for="n in [5,4,8,7,6]")
          .column.is-3
            p {{recibo['fecha'+n]}}
          .column.is-3
            p {{recibo['chegir'+n]}}
          .column.is-3
            p {{recibo['bco'+n] | bancoDescripcio }}
          .column.is-3
            p {{recibo['importe'+n]}}
        .columns        
          .column.is-3
              p Efectivo {{recibo['efectivo']}}

          
      footer.modal-card-foot
        button(class="button", v-on:click="toggleModal('recibo_detalle')") Cerrar



  .modal(:class="{ 'is-active': modals.recibos }")
    .modal-background
    .modal-card
      header.modal-card-head
        p.modal-card-title Carga de Recibos
        button.delete(aria-label="close", v-on:click="toggleModal('recibos')")
      section(class="modal-card-body")
        .columns 
          .column.is-3
            datepicker(type='text', placeholder='Fecha' v-model="nuevoRecibo['fecha']")
          .column.is-3.is-offset-2
            .control
              label.radio
                input(type='radio', v-model="nuevoRecibo['tiporec']", value="X")
                |     Recibo X
              label.radio
                input(type='radio',  v-model="nuevoRecibo['tiporec']", value="B")
                |     Recibo B
          .column.is-3.is-offset-1
            p 
              h2 Total {{totalRecibo}}
        .columns
          .column.is-3
            p Fecha
          .column.is-3
            p Nro Cheque
          .column.is-3
            p Banco
          .column.is-3
            p Importe
        .columns(v-for="n in [5,4,8,7,6]")
          .column.is-3
            .field
              datepicker(type='text', placeholder='Fecha' v-model="nuevoRecibo['fecha'+n]")
          .column.is-3
            .field
              input.input(type='text', placeholder='Nro Cheque', v-model="nuevoRecibo['chegir'+n]")
          .column.is-3
            .field
              //- input.input(type='text', placeholder='Banco', v-model="nuevoRecibo['bco'+n]")
              div.select
                select(v-model="nuevoRecibo['bco'+n]")
                  option(v-for="banco in bancos" :value="banco.param_3") {{banco.descripcio}}
          .column.is-3
            .field
              input.input(type='text', placeholder='Importe' v-model="nuevoRecibo['importe'+n]")
        .columns        
          .column.is-3.is-offset-9
            .field
              label Efectivo
              input.input(type='text', placeholder='Importe' v-model="nuevoRecibo['efectivo']")      
          div.space
      footer.modal-card-foot
        button(class="button is-success" v-on:click="guardarRecibo") Guardar
        button(class="button", v-on:click="toggleModal('recibos')") Cancelar

  .modal(:class="{ 'is-active': modals.pagos_deudor }")
    .modal-background
    .modal-card
      header.modal-card-head
        p.modal-card-title Carga de Pagos
        button.delete(aria-label="close", v-on:click="toggleModal('pagos_deudor')")
      section(class="modal-card-body")
        .columns
          .column.is-3
            .field
              label Comprobante
              .control
                input.input(type='text', placeholder='Comprobante', v-model='nuevoPago.comprobant')
                
          //- .column.is-3
          //-   .field
          //-     label Tipo de Pago
          //-     .control
          //-       .select
          //-         select.select(v-model='nuevoPago.forpago')
          //-           option(v-for="tipoPago in combos.tipoPagos" :value="tipoPago.param_3") {{tipoPago.descripcio}}
          //-         p(class="help is-danger")
          .column.is-3
            .field
              label Fecha de Pago
              .control
                datepicker(type='text', placeholder='Fecha de Pago' v-model="nuevoPago.f_pago")
                p(class="help is-danger")
          .column.is-3
            .field
              label Fecha de Aplicacion
              .control
                datepicker(type='text', placeholder='Fecha de Aplicacion' v-model="nuevoPago.f_aplic")
                p(class="help is-danger")
          .column.is-3
            .field
              label Fecha de Aplicacion
              .control
                datepicker(type='text', placeholder='Fecha de Rendicion' v-model="nuevoPago.f_rendicio")
                p(class="help is-danger")
        .columns
          .column.is-3
            .field
              label Importe
              .control
                input.input(type='text', placeholder='Importe' v-model="nuevoPago.importe")
                p(class="help is-danger")
          .column.is-3
            .field
              label Remesa
              .control
                input.input(type='text', placeholder='Remesa' v-model="nuevoPago.remesa")
                p(class="help is-danger")
          .column.is-3
            .field
              label Nro Empresa
              .control
                input.input(type='text', placeholder='Nro Empresa' v-model="nuevoPago.nroemp")
                p(class="help is-danger")
        .columns                  
          .column.is-12
            .field
              label Comentario
              .control
                textarea.textarea(v-model="nuevoPago.comentario")
                


      footer.modal-card-foot
        button(class="button is-success" v-on:click="guardarpago") Guardar
        button(class="button", v-on:click="toggleModal('pagos_deudor')") Cancelar



</template>

<script>
import CustomMenu from '~/components/Menu.vue'
import Tabs from '~/components/Tabs.vue'
import Tab from '~/components/Tab.vue'
import moment from 'moment'
import EstadoCuenta from '~/components/clientes/EstadoCuenta.vue'
import ClientService from '~/services/ClientService'
import FormularioService from '~/services/FormularioService'
import ObservacionesService from '~/services/ObservacionesService'
import FacturasService from '~/services/FacturasService'
import SpeechService from '~/services/SpeechService'
import PagosService from '~/services/PagosService'
import ConveniosService from '~/services/ConveniosService'
import ParametrosService from '~/services/ParametrosService'
import RecibosService from '~/services/RecibosService'
const formularioService = new FormularioService()
const recibosService = new RecibosService()
const pagosServices = new PagosService()
const observacionesService = new ObservacionesService()
const speechService = new SpeechService()
const facturasService = new FacturasService()
const conveniosService = new ConveniosService()
const parametrosService = new ParametrosService()
import Datepicker from '~/components/datepicker'
var bancos = []
export default {
  components: {
    CustomMenu, Tabs, Tab, EstadoCuenta, Datepicker
  },
  computed: {
    cuotas () {
      return this.convenio.cuotas
    },
    total () {
      return this.convenio.importe
    },
    fecha () {
      return moment(this.convenio.fecha)
    },
    totalRecibo () {
      var nros = [5, 4, 8, 7, 6]
      var total = 0
      var el = this
      nros.forEach(function (n) {
        var importe = parseFloat(el.nuevoRecibo['importe' + n])
        if (importe !== undefined && !isNaN(importe)) {
          total += importe
        }
      })
      var efectivo = parseFloat(this.nuevoRecibo['efectivo'])
      if (efectivo !== undefined && !isNaN(efectivo)) {
        total += efectivo
      }
      this.nuevoRecibo['total'] = total
      return total
    }

  },
  watch: {
    total () {
      for (var i = 1; i <= parseInt(this.cuotas); i++) {
        this.importes_convenios[i] = parseFloat(this.total) / this.cuotas
        this.$set(this.convenio, `importe${i}`, this.importes_convenios[i])
      }
    },
    cuotas: {
      handler (val, mutation) {
        for (var i = 1; i <= parseInt(this.cuotas); i++) {
          let fecha = this.fecha.add(i - 1, 'months').format('YYYY-MM-DD')
          this.$set(this.convenio, `fecha${i}`, fecha)
          this.fechas_convenios[i] = fecha
          this.importes_convenios[i] = parseFloat(this.total) / this.cuotas
          this.$set(this.convenio, `importe${i}`, this.importes_convenios[i])
        }
      }
    }
  },
  data () {
    return {
      newComentario: null,
      client: {},
      observaciones: {},
      formulario: [],
      convenios: [],
      editPago: false,
      nuevoRecibo: {},
      nuevoPago: {
        deudor: null,
        empresa: null,
        remesa: null,
        comprobant: null,
        forpago: null,
        tipago: null,
        f_pago: null,
        f_aplic: null,
        f_rendicio: null,
        importe: null,
        comentario: null,
        upcode1: null,
        upcode2: null,
        upcode3: null,
        upcode4: null,
        upcode5: null,
        upcode6: null,
        upfecha: null,
        nroemp: null
      },
      bancos: [],
      idDeudor: null,
      nroEmpresa: null,
      speech: [],
      facturas: [],
      pagos: [],
      fechas_convenios: [],
      importes_convenios: [],
      modals: {
        pagos_deudor: false,
        nuevo_convenio: false,
        recibos: false,
        recibo_detalle: false
      },
      convenio: {
        deudor: null,
        fecha: null,
        cuotas: 0,
        importes: [],
        importe: 0
      },
      recibos: [],
      recibo: {},
      observacion: {
        deudor: null,
        detalle: null
      },
      showPosition: false,
      combos: {
        tipoPagos: [],
        codigosEstados: [],
        codigosSituacion: [],
        tiposConvenios: [],
        tipPago: []
      }
    }
  },
  filters: {
    bancoDescripcio (bancoId) {
      let banco = bancos.find((banco) => banco.param_3 === bancoId)
      if (banco === undefined) return null
      return banco.descripcio
    }
  },
  methods: {
    eliminarPago (pago) {
      pagosServices.delete(pago.id).then((data) => {
        this.pagos.splice(this.pagos.indexOf(pago), 1)
      })
    },
    recibo_detalle (recibo) {
      this.recibo = recibo
      this.toggleModal('recibo_detalle')
    },
    guardarpago () {
      if (!this.editPago) {
        pagosServices.store(this.nuevoPago).then((data) => {
          this.pagos.push(data.data)
          this.toggleModal('pagos_deudor')
        })
      } else {
        pagosServices.update(this.nuevoPago.id, this.nuevoPago).then((data) => {
          this.toggleModal('pagos_deudor')
          this.editPago = false
          this.nuevoPago = {}
        })
      }
    },
    openModalPagos (tipPago) {
      this.editPago = false
      this.toggleModal('pagos_deudor')
      this.nuevoPago.tipago = tipPago
    },
    getBancos () {
      parametrosService.getBancos(this.nroEmpresa).then((data) => {
        this.bancos = data
        bancos = data
      })
    },
    getTiposPago () {
      parametrosService.getTipoPago(this.nroEmpresa).then((data) => { this.combos.tipoPagos = data })
    },
    getTipoConvenio () {
      parametrosService.getTipoConvenio(this.nroEmpresa).then((data) => { this.combos.tiposConvenios = data })
    },
    getCodigosEstados () {
      parametrosService.getCodigosEstados(this.nroEmpresa).then((data) => { this.combos.codigosEstados = data })
    },
    getCodigoSituacion () {
      parametrosService.getCodigosSituacion(this.nroEmpresa).then((data) => { this.combos.codigosSituacion = data })
    },
    getRecibos () {
      recibosService.search(this.getParamsSearch()).then((data) => { this.recibos = data.data })
    },
    getTipPago () {
      parametrosService.getTipPago().then((data) => { this.combos.tipPago = data })
    },

    toggleModal (modal) {
      this.modals[modal] = !this.modals[modal]
    },
    saveConvenio () {
      conveniosService.store(this.convenio).then((data) => {
        this.convenios.push(data.data)
        this.toggleModal('nuevo_convenio')
      }).catch((error) => console.log(error))
    },
    getFormulario () {
      formularioService.find(this.nroEmpresa).then(({data}) => {
        this.formulario = data.fields
      })
    },
    getPagos () {
      if (this.combos.tipoPagos.length === 0) {
        this.getTiposPago()
      }

      pagosServices.search(this.getParamsSearch()).then(({data}) => {
        this.pagos = data
      }).catch((error) => {
        alert(error)
      })
    },
    getConvenioData (convenio, cuota, field) {
      cuota = parseInt(cuota)
      let index = `${field}${cuota}`
      return convenio[index]
    },
    setConvenio (cuota, field) {
      let index = `${field}${cuota}`
      this.convenio[index] = this.fechas_convenios[cuota]
    },
    getParamsSearch () {
      return [{field: 'deudor', 'value': this.idDeudor}]
    },
    getFacturas () {
      if (this.facturas.length > 0) return
      facturasService.search(this.getParamsSearch()).then(({data}) => {
        this.facturas = data
      }).catch((error) => {
        alert(error)
      })
    },
    getConvenios () {
      conveniosService.search(this.getParamsSearch()).then(({data}) => {
        this.convenios = data
      }).catch((error) => {
        alert(error)
      })
    },
    guardarObservacion () {
      let clientService = new ClientService()
      let comentario = `${this.newComentario} <br> ${this.client.comentario}`
      clientService.update(this.idDeudor, {comentario}).then((res) => {
        if (res.status === 200) {
          this.client.comentario = comentario
          this.newComentario = null
        } else {
          alert('Algo salio mal intente mas tarde')
        }
      }).catch(err => { alert(err) })
    },
    field (value, typeField) {
      if (this.showPosition) return value
      let field = this.formulario.find((form) => {
        return form.position === value
      })
      if (field !== undefined) return field[typeField]
    },
    getObservaciones () {
      return observacionesService.find(this.idDeudor).then(({data}) => {
        this.observaciones = data
      }).catch((error) => {
        console.log(error)
      })
    },
    guardarRecibo () {
      this.nuevoRecibo['deudor'] = this.idDeudor
      this.nuevoRecibo['empresa'] = this.empresa
      recibosService.store(this.nuevoRecibo).then((data) => this.recibos.push(data.data)).catch((error) => console.log(error))
      this.toggleModal('recibos')
      this.nuevoRecibo = {}
    },
    getSpeech () {
      return speechService.search(this.nroEmpresa).then(({data}) => {
        this.speech = data
      }).catch((error) => {
        console.log(error)
      })
    },
    editarPago (pago) {
      this.nuevoPago = pago
      this.toggleModal('pagos_deudor')
      this.editPago = true
    },
    getData () {
      let clienteRepo = new ClientService()
      return clienteRepo.find(this.idDeudor).then(({data}) => {
        this.client = data
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  mounted (context) {
    const [id, empresa] = this.$route.params.id.split('-')
    this.idDeudor = id
    this.nroEmpresa = empresa
    this.getData()
    this.getFormulario()
    this.getObservaciones()
    this.getSpeech()
    this.getCodigosEstados()
    this.getCodigoSituacion()
    this.getTipoConvenio()
    this.getTipPago()
    this.getRecibos()
    this.getBancos()
    this.observacion.deudor = id
    this.convenio.deudor = id
    this.nuevoPago.deudor = this.idDeudor
    this.nuevoPago.empresa = empresa
  }
}
</script>

<style scoped>
  
  hr {
    margin-bottom: 12px;
    margin-top: 5px;
  }
  h4.title{
    font-size: 20px !important;
    padding: 0px !important;
    margin: 0px !important;
  }

  .section {
    padding-top: 0px !important;
  }

  .control {
    margin-top: 5px;
  }

  .column {
    padding-bottom: 2.5px !important;
    padding-top: 0px;
    /*padding: 5px;*/
  }
  .telefonos {
    margin-top: 5px;
  }
  
  .space {
    margin-top: 10px; 
    padding: 10px;
  }


 

</style>
