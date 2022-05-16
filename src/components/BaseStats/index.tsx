import React from "react";
import { PokemonName, PokemonStats } from "../../dtos/PokemonDTO";
import { Atributo, Atributos, Container, MedidorBackground, Medidores, MedidorValor, Valor, Valores } from "./styles";

interface BaseStatsProps{
    stats: PokemonStats;
    pokemonType: PokemonName;
}

function BaseStats({stats, pokemonType} : BaseStatsProps){

    function calculaValorStat(valorAtual: string): string{
        const totalPontos = 252;
        const novoValor = Number(valorAtual);
        let valorAtualCemPc = novoValor * 100;
        let percentual = valorAtualCemPc/totalPontos;
        return percentual.toFixed(2);
    }

    return(
        <Container>
            <Atributos>
                <Atributo type={pokemonType}>HP</Atributo>
                <Atributo type={pokemonType}>ATK</Atributo>
                <Atributo type={pokemonType}>DEF</Atributo>
                <Atributo type={pokemonType}>SATK</Atributo>
                <Atributo type={pokemonType}>SDEF</Atributo>
                <Atributo type={pokemonType}>SPD</Atributo>
            </Atributos>
            <Valores>
                <Valor>{stats.hp}</Valor>
                <Valor>{stats.atk}</Valor>
                <Valor>{stats.def}</Valor>
                <Valor>{stats.satk}</Valor>
                <Valor>{stats.sdef}</Valor>
                <Valor>{stats.spd}</Valor>
            </Valores>
            <Medidores>
                <MedidorBackground type={pokemonType}>
                    <MedidorValor 
                        percentual={calculaValorStat(stats.hp)}
                        type={pokemonType}
                    />
                </MedidorBackground>
                <MedidorBackground type={pokemonType}>
                    <MedidorValor
                        percentual={calculaValorStat(stats.atk)}
                        type={pokemonType}
                    />
                </MedidorBackground>
                <MedidorBackground type={pokemonType}>
                    <MedidorValor 
                        percentual={calculaValorStat(stats.def)}

                        type={pokemonType}
                    />
                </MedidorBackground>
                <MedidorBackground type={pokemonType}>
                    <MedidorValor 
                        percentual={calculaValorStat(stats.satk)}
                        type={pokemonType}
                    />
                </MedidorBackground>
                <MedidorBackground type={pokemonType}>
                    <MedidorValor 
                        percentual={calculaValorStat(stats.sdef)}
                        type={pokemonType}
                    />
                </MedidorBackground>
                <MedidorBackground type={pokemonType}>
                    <MedidorValor 
                        percentual={calculaValorStat(stats.spd)}

                        type={pokemonType}
                    />
                </MedidorBackground>
            </Medidores>
        </Container>
    )
}

export default BaseStats;