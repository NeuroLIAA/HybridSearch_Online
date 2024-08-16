% On each trial, one-quarter of the items (1 in set-size 4 trials and 2 in set-size 8 trials) 
% were presented on each quadrant. Items’locations were selected randomly from 9 possible 
% locations in each quadrant: 2.7°, 5.3°, or 8° vertically from the center of the screen, 
% and 2.7°, 5.3°, or 8° horizontally from the center of the screen (e.g., in the top left 
% quadrant, items could appear centered at 2.7°, 5.3°, or 8° to the left of the fixation, 
% and 2.7°, 5.3°, or 8° above the fixation).

ax = [2.7 5.3 8];
ay = [2.7 5.3 8];

% Mi pantalla, 19cm x 33cm a distancia 55cm

% tg(angulo maximo) = (pantalla/2) / distancia normal
ax_max = atand( 0.5*33/55);
ay_max = atand( 0.5*19/55);

% Entonces, los angulos de Luria expresados en porcentaje de la pantalla
% seria.

x = ax / ax_max;
y = ay / ay_max;

% Esto es por cada cuadrante.
% En el que bajamos usan un rango en y más chico (en realidad más
% cuadrado)... x = 0:0.05:0.4, y = 0:0.05:0.4, 

% On each trial, one-quarter of the items (1 in set-size 4 trials and 2 in 
% set-size 8 trials) were presented on each quadrant.

% Las 9 posiciones por cuadrante son:
% pos = round([repmat(x,1,3)' reshape(repmat(y',1,3)',1,9)'],2);
pos = [repmat(x,1,3)' reshape(repmat(y',1,3)',1,9)'];

cols    = {'black','blue','green','magenta','orange','red','white','yellow'};
change  = {'same','different'};

Ntr = 120;

%%
pos8    = nan(Ntr,8);
cols8   = nan(Ntr,8);
for tr = 1:Ntr
    for j = 1:4
        pos8(tr,[j j+4]) = randperm(9,2); % Al azar sin reposición
    end
    cols8(tr,:) = randperm(8); % Al azar sin reposición, todos colores distintos
end
nstim8      = [4*ones(Ntr/2,1); 8*ones(Ntr/2,1)];
opacity8    = [ones(Ntr/2,4) zeros(Ntr/2,4); ones(Ntr/2,4) ones(Ntr/2,4)];
quadrant8   = repmat(1:4,Ntr,2);
change8     = [ones(Ntr/4,1); 2*ones(Ntr/4,1); ones(Ntr/4,1); 2*ones(Ntr/4,1)];
for tr = 1:Ntr
    target8(tr) = randi([1 nstim8(tr)]);
end

%%
cellnames = {'trialnum','condit','stimamt',...
                'stim1posx','stim1posy','stim1col','stim1opa',...
                'stim2posx','stim2posy','stim2col','stim2opa',...
                'stim3posx','stim3posy','stim3col','stim3opa',...
                'stim4posx','stim4posy','stim4col','stim4opa',...
                'stim5posx','stim5posy','stim5col','stim5opa',...
                'stim6posx','stim6posy','stim6col','stim6opa',...
                'stim7posx','stim7posy','stim7col','stim7opa',...
                'stim8posx','stim8posy','stim8col','stim8opa',...
                'stimsizex','stimsizey',...
                'targetposx','targetposy',...
                'targetcol','corrAns'};
stims = cell(Ntr,length(cellnames));
for tr = 1:Ntr
    stims{tr,1} = tr;
    stims{tr,2} = change{change8(tr)};
    stims{tr,3} = nstim8(tr);
    for i = 1:8
        if (quadrant8(tr,i)==1)
            % 'stim1posx','stim1posy','stim1col','stim1opa'
            stims{tr,3 + 4*(i-1) + 1} = pos(pos8(tr,i),1);
            stims{tr,3 + 4*(i-1) + 2} = pos(pos8(tr,i),2);
        elseif (quadrant8(tr,i)==2)
            % 'stim1posx','stim1posy','stim1col','stim1opa'
            stims{tr,3 + 4*(i-1) + 1} = pos(pos8(tr,i),1);
            stims{tr,3 + 4*(i-1) + 2} = -pos(pos8(tr,i),2);
        elseif (quadrant8(tr,i)==3)
            % 'stim1posx','stim1posy','stim1col','stim1opa'
            stims{tr,3 + 4*(i-1) + 1} = -pos(pos8(tr,i),1);
            stims{tr,3 + 4*(i-1) + 2} = -pos(pos8(tr,i),2);
        elseif (quadrant8(tr,i)==4)
            % 'stim1posx','stim1posy','stim1col','stim1opa'
            stims{tr,3 + 4*(i-1) + 1} = -pos(pos8(tr,i),1);
            stims{tr,3 + 4*(i-1) + 2} = pos(pos8(tr,i),2);
        end
        stims{tr,3 + 4*(i-1) + 3} = cols{cols8(tr,i)};
        stims{tr,3 + 4*(i-1) + 4} = opacity8(tr,i);
    end
    j = 3 + 4*8 + 1;
    
    % 'stimsizex','stimsizey'
    stims{tr,j} = 0.05; j = j + 1;% Same as previous online experiment
    stims{tr,j} = 0.05; j = j + 1;% Same as previous online experiment

    % 'targetposx','targetposy'
    if (target8(tr)==1 || target8(tr)==5)
        stims{tr,j} = pos(pos8(tr,target8(tr)),1); j = j + 1;
        stims{tr,j} = pos(pos8(tr,target8(tr)),2); j = j + 1;
    elseif (target8(tr)==2 || target8(tr)==6)
        stims{tr,j} = pos(pos8(tr,target8(tr)),1); j = j + 1;
        stims{tr,j} = -pos(pos8(tr,target8(tr)),2); j = j + 1;
    elseif (target8(tr)==3 || target8(tr)==7)
        stims{tr,j} = -pos(pos8(tr,target8(tr)),1); j = j + 1;
        stims{tr,j} = -pos(pos8(tr,target8(tr)),2); j = j + 1;
    elseif (target8(tr)==4 || target8(tr)==8)
        stims{tr,j} = -pos(pos8(tr,target8(tr)),1); j = j + 1;
        stims{tr,j} = pos(pos8(tr,target8(tr)),2); j = j + 1;
    end

    % 'targetcol','corrAns'
    if strcmp(change{change8(tr)},'same')
        stims{tr,j} = cols{cols8(tr,target8(tr))}; j = j + 1;
        stims{tr,j} = 's'; j = j + 1;
    elseif strcmp(change{change8(tr)},'different')
        tmp = 1:8; tmp(cols8(tr,target8(tr))) = []; % Tomo un color que no sea el target. No me estoy fijando si el color esta o no en la pantalla
        stims{tr,j} = cols{tmp(randi([1 7]))}; j = j + 1;
        stims{tr,j} = 'd'; j = j + 1;
    end    
end

stims = [cellnames; stims];