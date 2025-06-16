import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  ChangeDetectionStrategy,
} from '@angular/core';
import { RenderService } from '../../services/render.service';
import * as go from 'gojs';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrl: './diagram.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiagramComponent implements AfterViewInit {
  @ViewChild('diagramDiv', { static: true }) diagramDiv!: ElementRef;

  families: any[] = [];

  constructor(private render: RenderService) {}

  ngAfterViewInit(): void {
    this.render.getFamilies().subscribe((data) => {
      this.families = data;
      this.createDiagram();
    });
  }

  createDiagram() {
    const $ = go.GraphObject.make;

    // Créer un diagramme GoJS
    const myDiagram = $(go.Diagram, this.diagramDiv.nativeElement, {
      initialContentAlignment: go.Spot.Center,
      'undoManager.isEnabled': true,
      layout: $(go.TreeLayout, {
        angle: 90,
        layerSpacing: 180,
        nodeSpacing: 140,
      }),
    });

    myDiagram.groupTemplate = this.render.getGroupTemplate();
    // Définir un modèle de noeud pour chaque membre de la famille
    myDiagram.nodeTemplate = this.render.getNodeTemplate();

    // Modèle de lien pour connecter les noeuds (lien parent-enfant)
    myDiagram.linkTemplate = this.render.getStyleDefaultLink();

    myDiagram.linkTemplateMap.add(
      'ParentChild',
      this.render.getStyleParentChildLink()
    );
    myDiagram.linkTemplateMap.add('Spouse', this.render.getStyleSpouseLink());

    // Charger les données de l'arbre
    const model = new go.GraphLinksModel();

    // Charger les noeuds depuis le service
    model.nodeDataArray = this.families;

    // Créer les relations parentales pour chaque enfant
    model.linkDataArray = this.render.createParentChildLinks(this.families);

    // Ajuster la disposition selon les générations
    myDiagram.layout = this.render.getLayoutCustom();

    // Assigner le modèle au diagramme
    myDiagram.model = model;
  }
}
